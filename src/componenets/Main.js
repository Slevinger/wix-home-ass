import React from "react";
import { Main } from "./StyledComponents";
import SettingsBox from "./SettingsBox";
import Board from "./Board";
import useBoard from "../hooks/useBoard";
import GameStatus from "./GameStatus";

export default () => {
  const boardHook = useBoard();
  const {
    state: { board }
  } = boardHook;

  return (
    <Main>
      <GameStatus {...boardHook.state} />
      <SettingsBox {...boardHook} />

      {board.length > 0 && <Board {...boardHook} />}
    </Main>
  );
};
