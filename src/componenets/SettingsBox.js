import React, { useState, useEffect } from "react";
import Input from "./Input";
import { SettingsBoxContainer } from "./StyledComponents";
import Spinner from "react-bootstrap/Spinner";

export default ({ state: { superman }, setSuperman, createBoard }) => {
  const [thinking, setThinking] = useState(false);
  const [cols, setCols] = useState(10);
  const [rows, setRows] = useState(10);
  const [mines, setMines] = useState(12);
  debugger;
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
          await setThinking(true);
          setTimeout(async () => {
            await createBoard(rows, cols, mines);
            setThinking(false);
          }, 0);
        }}
      >
        New Game
      </button>
      {thinking && (
        <Spinner animation="border" size="sm" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </SettingsBoxContainer>
  );
};
