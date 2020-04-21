import styled, { css } from "styled-components";

const CELL_WIDTH = 28;

export const SettingsBoxContainer = styled.div`
  flex-direction: column;
  display: flex;
  padding: 7px;
  width: 250px;
  position: absolute;
  left: 50px;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 15px;
  margin-left: 10px;
`;

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const StyledCell = styled.div`
  width: ${CELL_WIDTH}px;
  height: ${CELL_WIDTH}px;
  line-height: ${CELL_WIDTH}px;
  text-align: center;
  border: solid thin black;
  background-color: ${({ clicked, superman }) =>
    clicked ? "white" : superman ? "rgba(0,40,40,0.1)" : "rgba(0,10,10,0.2)"};
  &:hover {
    background-color: white;
    ${({ clicked }) =>
      !clicked
        ? css`
            cursor: pointer;
          `
        : ""}
  }
  .fail-icon {
    position: absolute;
    left: -7px;
    color: red;
    width: 30px;
    height: 30px;
    font-weight: bold;
  }
`;

export const StyledBoard = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  overflow:auto;
  width: ${({ countCols }) => countCols * (CELL_WIDTH + 2)}px;
  ${({ status }) =>
    status !== "GAME ON"
      ? css`
          pointer-events: none;
          opacity: 0.6;
        `
      : ""}
  }
`;

export const StyledBoardContainer = styled.div`
  position: absolute;
  left: 25%;
  top: 15%;
  max-width: 800px;
  max-height: 700px;
  overflow: auto;
  box-shadow: -5px -5px 5px;
`;

export const Main = styled.div`
  .game-status-container {
    text-align: center;
    justify-self: center;
    align-self: center;
    position: fixed;
    width: 100%;
    padding: 10;
    font-size: 23px;
    z-index: 10;

    .game-status {
      background-color: rgba(255, 255, 255, 0.4);
      display: inline-flex;

      .GAME_ON {
        color: blue;
      }

      .WON {
        color: green;
      }

      .LOSE {
        color: red;
      }
    }
  }
`;
