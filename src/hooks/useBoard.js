import React, { useReducer } from "react";
import Board, { posToString } from "./helpers/Board";
import pick from "lodash/pick";
import { stat } from "fs";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "clickCell":
      // debugger;
      return { ...state, clicked: { ...state.clicked, [payload]: 1 } };
    case "flagCell":
      // debugger;
      return { ...state, flagged: { ...state.flagged, [payload]: 1 } };
    case "unFlagCell":
      debugger;
      return {
        ...state,
        flagged: pick(
          state.flagged,
          Object.keys(state.flagged).filter(key => key != payload)
        )
      };
    case "reset":
      // debugger;
      return payload;
    case "reveal":
      // debugger;
      return { ...state, clicked: { ...state.clicked, ...payload } };
    case "think":
      // debugger;
      return { ...state, thinking: true };
    case "stopThink":
      // debugger;
      return { ...state, thinking: false };
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
    boaredRefs: {},
    thinking: false
  });

  const clickCell = indexes => {
    dispatch({ type: "clickCell", payload: indexes });
  };

  const flagCell = indexes => {
    dispatch({ type: "flagCell", payload: indexes });
  };
  const unFlagCell = indexes => {
    dispatch({ type: "unFlagCell", payload: indexes });
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
    const list = board.traverseFrom(row, col);
    dispatch({
      type: "reveal",
      payload: list
    });
  };

  const reset = async (rows, cols, countMines) => {
    debugger;
    await dispatch({ type: "think" });
    const newBoard = board.createBoard(rows, cols, countMines);
    await dispatch({
      type: "reset",
      payload: { ...newBoard, flagged: [] }
    });
    dispatch({ type: "stopThink" });
  };

  return {
    state,
    clickCell,
    toggleFlag,
    reveal,
    createBoard: reset
  };
};
