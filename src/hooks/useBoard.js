import { useReducer } from "react";
import { createBoard } from "../services/create-board";
import { traverseFrom } from "../services/traverse-bfs";
import difference from "lodash/difference";
import { posToString } from "../services";
import { reducer } from "./reducers/boardReducer";
import { initialState } from "./reducers/boardReducer";

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const _tryToWin = ({ additionalCells, addOrRemoveFromFlagsCount }) => {
    const clicked = { ...state.clicked, ...additionalCells }; // combine all clicked cells together

    const countCells = state.height * state.width;
    let didClickAllOver = false;
    if (countCells - Object.keys(clicked).length === state.countMines) {
      const notClicked = Object.keys(state.mines).filter(
        indexes => !clicked[indexes]
      );
      didClickAllOver =
        difference(notClicked, Object.keys(state.mines)).length === 0;
    }

    if (
      didClickAllOver ||
      state.flaggedMinesCount + addOrRemoveFromFlagsCount === state.countMines
    ) {
      dispatch({ type: "gemeWon" });
    }
  };

  const _decFlaggedMinesCount = () => {
    dispatch({ type: "decFlaggedMinesCount" });
  };

  const _incFlaggedMinesCount = () => {
    dispatch({ type: "incFlaggedMinesCount" });
  };

  const clickCell = indexes => {
    if (state.map[indexes]) {
      endGame("LOSE");
    }

    if (!state.neighbors[indexes]) {
      reveal(indexes);
    }

    dispatch({ type: "clickCell", payload: { indexes } });
    _tryToWin({
      addOrRemoveFromFlagsCount: 0,
      additionalCells: { [indexes]: 1 }
    });
  };

  const setSuperman = isSuperman => {
    dispatch({ type: "setSuperman", payload: { isSuperman } });
  };

  const endGame = status => {
    dispatch({ type: "endGame", payload: { status } });
  };

  const _flagCell = indexes => {
    dispatch({ type: "flagCell", payload: { indexes } });
    if (state.mines[indexes]) {
      _incFlaggedMinesCount();
      _tryToWin({ addOrRemoveFromFlagsCount: 1, additionalCells: {} });
    }
  };

  const _unFlagCell = indexes => {
    dispatch({ type: "unFlagCell", payload: { indexes } });
    if (state.mines[indexes]) {
      _decFlaggedMinesCount();
    }
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
    if (!state.mines[posToString(row, col)]) {
      const listOfCellsToReaveal = traverseFrom(posToString(row, col), state);
      dispatch({
        type: "reveal",
        payload: { listOfCellsToReaveal }
      });

      _tryToWin({
        addOrRemoveFromFlagsCount: 0,
        additionalCells: listOfCellsToReaveal
      });
    }
  };

  const reset = async (rows, cols, countMines) => {
    const newBoard = createBoard(rows, cols, countMines);
    await dispatch({
      type: "reset",
      payload: { ...newBoard }
    });
  };

  return {
    state,
    clickCell,
    setSuperman,
    endGame,
    toggleFlag,
    reveal,
    createBoard: reset
  };
};
