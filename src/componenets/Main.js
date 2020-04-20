import React, { useState, useEffect } from "react";

import SettingsBox from "./SettingsBox";
import Board from "./Board";
import useBoard from "../hooks/useBoard";

export default () => {
  const [countMines, setCountMines] = useState(12);
  const [countRows, setCountRows] = useState(10);
  const [countCols, setCountCols] = useState(10);
  const [superman, setSuperman] = useState(false);

  const boardHook = useBoard();

  const {
    createBoard,
    getNeighborsCount,
    state: { board, status, flagged }
  } = boardHook;

  useEffect(() => {
    createBoard(countRows, countCols, countMines, getNeighborsCount);
  }, []);

  if (board.length === 0) {
    return null;
  }
  const minesLeft = countMines - (Object.keys(flagged).length || 0);

  return (
    <>
      <SettingsBox
        createBoard={createBoard}
        superman={superman}
        setSuperman={setSuperman}
        countMines={countMines}
        setCountMines={setCountMines}
        countRows={countRows}
        setCountRows={setCountRows}
        countCols={countCols}
        setCountCols={setCountCols}
      />

      <div
        style={{
          textAlign: "center",
          justifySelf: "center",
          alignSelf: "center",
          position: "fixed",
          width: "100%",
          padding: 10,
          fontSize: 23,
          zIndex: 10
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.4)",
            display: "inline-flex"
          }}
        >
          {`Flags Lefts : (${minesLeft}) `}
          <text
            style={{
              marginLeft: 10,
              color:
                status === "LOSE" ? "red" : status === "WON" ? "green" : "blue"
            }}
          >
            {status}
          </text>
        </div>
      </div>
      {board && (
        <Board {...boardHook} countMines={countMines} superman={superman} />
      )}
      {}
    </>
  );
};
