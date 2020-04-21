import React, { useState, useEffect } from "react";
import Input from "./Input";
import { SettingsBoxContainer } from "./StyledComponents";

export default ({
  state: { superman },
  setLoading,
  setSuperman,
  createBoard
}) => {
  const [cols, setCols] = useState(20);
  const [rows, setRows] = useState(20);
  const [mines, setMines] = useState(12);
  useEffect(() => {
    createBoard(rows, cols, mines);
  }, []);
  return (
    <SettingsBoxContainer>
      <Input
        label="Col Count"
        value={cols}
        onChange={e => {
          setCols(Number(e.target.value));
        }}
      />
      <Input
        label="Row Count"
        value={rows}
        onChange={e => {
          setRows(Number(e.target.value));
        }}
      />
      <Input
        label="Mines"
        value={mines}
        onChange={e => {
          setMines(Number(e.target.value));
        }}
      />
      <Input
        label="SUPERMAN"
        checked={superman}
        type="checkbox"
        style={{ transform: "scale(2)" }}
        onChange={e => {
          setSuperman(!superman);
        }}
      />
      <button
        onClick={async () => {
          await setLoading(true);
          setTimeout(async () => {
            await createBoard(rows, cols, mines);
            setLoading(false);
          }, 0);
        }}
      >
        New Game
      </button>
    </SettingsBoxContainer>
  );
};
