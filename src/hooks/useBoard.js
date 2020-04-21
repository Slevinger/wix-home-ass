import { useReducer } from "react";
import { createBoard } from "./helpers/Board";
import { traverseFrom } from "../services/traverse-bfs";
import pick from "lodash/pick";
import difference from "lodash/difference";
import { posToString } from "../services";

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
      return { ...state, clicked: { ...state.clicked, [cellToClick]: 1 } };
    case "flagCell":
      const { indexes: cellToFlag } = payload;

      return {
        ...state,
        flagged: { ...state.flagged, [cellToFlag]: 1 }
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
    case "gemeWon":
      debugger;
      return { ...state, flagged: state.mines, status: "WON" };
    default:
      return state;
  }
};

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
    tryToWin({ [indexes]: 1 });
  };

  const tryToWin = additinalCells => {
    debugger;
    const clicked = { ...state.clicked, ...additinalCells };
    const notClicked = Object.keys(state.map).filter(
      indexes => !clicked[indexes]
    );

    if (
      difference(notClicked, Object.keys(state.mines)).length === 0 ||
      Object.keys(state.flagged).filter(indexes => state.mines[indexes])
        .length === state.countMines
    ) {
      dispatch({ type: "gemeWon" });
    }
  };

  const flagCell = indexes => {
    dispatch({ type: "flagCell", payload: { indexes } });
    tryToWin();
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
    const listOfCellsToReaveal = traverseFrom(posToString(row, col), state);
    dispatch({
      type: "reveal",
      payload: { listOfCellsToReaveal }
    });
  };

  const reset = async (rows, cols, countMines) => {
    const newBoard = createBoard(rows, cols, countMines);
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
