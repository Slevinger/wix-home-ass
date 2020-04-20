import React, { useState, useEffect, useCallback, useRef } from "react";
import Input from "./Input";
import { SettingsBoxContainer } from "./StyledComponents";
import Board from "./Board";
import useBoard from "../hooks/useBoard";

export default () => {
  const [countMines, setCountMines] = useState(20);
  const [countRows, setCountRows] = useState(10);
  const [countCols, setCountCols] = useState(13);
  const [superman, setSuperman] = useState(false);
  const boardHook = useBoard();
  const {
    createBoard,
    getNeighborsCount,
    state: { board }
  } = boardHook;
  useEffect(() => {
    createBoard(countRows, countCols, countMines, getNeighborsCount);
  }, []);
  debugger;
  if (board.length === 0) {
    return null;
  }
  console.log(board);
  return (
    <>
      <SettingsBoxContainer>
        <Input
          label="width"
          value={countCols}
          onChange={e => {
            setCountCols(Number(e.target.value));
          }}
        />
        <Input
          label="height"
          value={countRows}
          onChange={e => {
            setCountRows(Number(e.target.value));
          }}
        />
        <Input
          label="mines"
          value={countMines}
          onChange={e => {
            setCountMines(Number(e.target.value));
          }}
        />
        <Input
          label="SUPERMAN"
          value={superman}
          type="checkbox"
          style={{ transform: "scale(2)" }}
          onChange={e => {
            setSuperman(!superman);
          }}
        />
        <button
          onClick={() => {
            createBoard(countRows, countCols, countMines);
          }}
        >
          New Game
        </button>
      </SettingsBoxContainer>
      {board && (
        <Board {...boardHook} countMines={countMines} superman={superman} />
      )}
    </>
  );
};
