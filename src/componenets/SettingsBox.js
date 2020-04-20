import React, { useState } from "react";
import Input from "./Input";
import { SettingsBoxContainer } from "./StyledComponents";
import Spinner from "react-bootstrap/Spinner";
export default ({
  countCols,
  setCountCols,
  countRows,
  setCountRows,
  countMines,
  setCountMines,
  superman,
  setSuperman,
  createBoard
}) => {
  const [thinking, setThinking] = useState(false);

  return (
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
        onClick={async () => {
          await setThinking(true);
          setTimeout(async () => {
            await createBoard(countRows, countCols, countMines);
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
