import { useReducer } from "react";
import { createBoard } from "../services/create-board";
import { traverseFrom } from "../services/traverse-bfs";
import difference from "lodash/difference";
import { posToString } from "../services";
import { reducer } from "./reducers/boardReducer";

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    neighbors: {},
    flagged: {},
    map: {},
    mines: {},
    board: [],
    clicked: {},
    status: "NOT READY",
    superman: false,
    loading: false
  });

  const _tryToWin = additinalCells => {
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

  const clickCell = indexes => {
    debugger;
    if (state.map[indexes]) {
      endGame("LOSE");
    }

    if (state.neighbors[indexes] === 0) {
      reveal(indexes);
    }

    dispatch({ type: "clickCell", payload: { indexes } });
    _tryToWin({ [indexes]: 1 });
  };

  const setSuperman = isSuperman => {
    debugger;
    dispatch({ type: "setSuperman", payload: { isSuperman } });
  };

  const setLoading = isLoading => {
    debugger;
    dispatch({ type: "setLoading", payload: { isLoading } });
  };

  const endGame = status => {
    dispatch({ type: "endGame", payload: { status } });
  };

  const _flagCell = indexes => {
    dispatch({ type: "flagCell", payload: { indexes } });
    _tryToWin();
  };

  const _unFlagCell = indexes => {
    dispatch({ type: "unFlagCell", payload: { indexes } });
  };

  const toggleFlag = indexes => {
    if (state.flagged[indexes]) {
      _unFlagCell(indexes);
    } else {
      if (Object.keys(state.flagged).length < state.countMines) {
        _flagCell(indexes);
      }
    }
  };

  const reveal = (row, col) => {
    const listOfCellsToReaveal = traverseFrom(posToString(row, col), state);
    dispatch({
      type: "reveal",
      payload: { listOfCellsToReaveal }
    });
    _tryToWin(listOfCellsToReaveal);
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
    setLoading,
    setSuperman,
    endGame,
    toggleFlag,
    reveal,
    createBoard: reset
  };
};
