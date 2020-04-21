import { useReducer } from "react";
import Board from "./helpers/Board";
import pick from "lodash/pick";
import difference from "lodash/difference";

const checkIsFinished = (state, additinalCells) => {
  const clicked = { ...state.clicked, ...additinalCells };
  const notClicked = Object.keys(state.map).filter(
    indexes => !clicked[indexes]
  );
  const addToState = {};
  if (difference(notClicked, Object.keys(state.mines)).length === 0) {
    addToState.status = "WON";
    addToState.flagged = state.mines;
  }
  addToState.clicked = clicked;
  return addToState;
};

const reducer = (state, { type, payload }) => {
  let addToState;
  debugger;
  switch (type) {
    case "clickCell":
      const { indexes: cellToClick } = payload;

      addToState = checkIsFinished(state, { [cellToClick]: 1 });
      return { ...state, ...addToState };
    case "flagCell":
      const { indexes: cellToFlag } = payload;
      const GAME_WON =
        Object.keys({ ...state.flagged, [cellToFlag]: 1 }).filter(
          key => state.mines[key]
        ).length === state.countMines;
      const status = GAME_WON ? { status: "WON" } : {};
      return {
        ...state,
        ...status,
        flagged: { ...state.flagged, [payload]: 1 }
      };
    case "unFlagCell":
      const { indexes: cellToUnFlag } = payload;
      return {
        ...state,
        flagged: pick(
          state.flagged,
          Object.keys(state.flagged).filter(key => key !== cellToUnFlag)
        )
      };
    case "reset":
      const newBoard = payload;
      return { ...state, ...newBoard };
    case "setSuperman":
      debugger;
      const { isSuperman } = payload;
      return { ...state, superman: isSuperman };
    case "reveal":
      const { listOfCellsToReaveal } = payload;
      addToState = checkIsFinished(state, listOfCellsToReaveal);
      return { ...state, ...addToState };
    case "endGame":
      return { ...state, status: payload };
    default:
      return state;
  }
};

const board = new Board();

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    neighbors: {},
    flagged: {},
    map: {},
    mines: {},
    board: [],
    clicked: {},
    superman: false
  });

  const clickCell = indexes => {
    debugger;
    if (state.map[indexes]) {
      endGame("LOSE");
    }

    if (state.neighbors[indexes] === 0) {
      reveal(indexes);
    }

    dispatch({ type: "clickCell", payload: { indexes } });
  };

  const flagCell = indexes => {
    dispatch({ type: "flagCell", payload: { indexes } });
  };

  const setSuperman = isSuperman => {
    debugger;
    dispatch({ type: "setSuperman", payload: { isSuperman } });
  };

  const unFlagCell = indexes => {
    dispatch({ type: "unFlagCell", payload: { indexes } });
  };

  const endGame = status => {
    dispatch({ type: "endGame", payload: { status } });
  };

  const toggleFlag = indexes => {
    if (state.flagged[indexes]) {
      unFlagCell(indexes);
    } else {
      if (Object.keys(state.flagged).length < state.countMines) {
        flagCell(indexes);
      }
    }
  };

  const reveal = (row, col) => {
    const listOfCellsToReaveal = board.traverseFrom(row, col);
    dispatch({
      type: "reveal",
      payload: { listOfCellsToReaveal }
    });
  };

  const reset = async (rows, cols, countMines) => {
    const newBoard = board.createBoard(rows, cols, countMines);
    await dispatch({
      type: "reset",
      payload: { ...newBoard, flagged: [] }
    });
  };

  return {
    state,
    clickCell,
    toggleFlag,
    reveal,
    endGame,
    setSuperman,
    createBoard: reset
  };
};
