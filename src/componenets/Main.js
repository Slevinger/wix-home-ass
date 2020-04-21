import React, { useState } from "react";
import { Main } from "./StyledComponents";
import SettingsBox from "./SettingsBox";
import Board from "./Board";
import useBoard from "../hooks/useBoard";
import GameStatus from "./GameStatus";

export default () => {
  const boardHook = useBoard();
  const [loading, setLoading] = useState(false);
  const {
    state: { board }
  } = boardHook;
  return (
    <Main>
      <SettingsBox setLoading={setLoading} {...boardHook} />
      <GameStatus {...boardHook.state} />
      {board.length > 0 && <Board loading={loading} {...boardHook} />}
    </Main>
  );
};
