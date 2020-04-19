import React, { useState, useEffect, useCallback } from "react";
import Input from "./Input";
import { SettingsBoxContainer } from "./StyledComponents";
import { createBoard } from "../api/minesSweeperApi";
import Board from "./Board";

export default () => {
  const [countMines, setCountMines] = useState(9);
  const [countRows, setCountRows] = useState(8);
  const [countCols, setCountCols] = useState(10);
  const [superman, setSuperman] = useState(false);

  const [board, setBoard] = useState(null);
  useEffect(() => setBoard(createBoard(countRows, countCols, countMines)), []);
  const createBoardCallback = useCallback(() => {
    setBoard(createBoard(countRows, countCols, countMines));
  }, [countCols, countRows, countMines]);
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
      </SettingsBoxContainer>
      {board && <Board {...board} superman={superman} />}
    </>
  );
};
