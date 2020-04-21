import React, { useState, useEffect } from "react";
import Input from "./Input";
import { SettingsBoxContainer } from "./StyledComponents";
import Spinner from "react-bootstrap/Spinner";

export default ({
  state: { superman },
  setSuperman,
  createBoard,
  setLoading
}) => {
  const [cols, setCols] = useState(40);
  const [rows, setRows] = useState(40);
  const [mines, setMines] = useState(12);
  useEffect(() => {
    createBoard(rows, cols, mines);
  }, []);
  return (
    <SettingsBoxContainer>
      <Input
        label="width"
        value={cols}
        onChange={e => {
          setCols(Number(e.target.value));
        }}
      />
      <Input
        label="height"
        value={rows}
        onChange={e => {
          setRows(Number(e.target.value));
        }}
      />
      <Input
        label="mines"
        value={mines}
        onChange={e => {
          setMines(Number(e.target.value));
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
