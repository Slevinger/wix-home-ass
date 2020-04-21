import styled, { css } from "styled-components";

const CELL_WIDTH = 28;
const BOARD_CONTAINER_WIDTH = 800;
const BOARD_CONTAINER_HEIGHT = 700;

export const SettingsBoxContainer = styled.div`
  flex-row: column;
  display: flex;
  justify-content: center;
  padding: 7px;
  width: 100%;
  height: 30px;
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
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
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
  justify-self:center;
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
  max-width: ${BOARD_CONTAINER_WIDTH}px;
  max-height: ${BOARD_CONTAINER_HEIGHT}px;
  overflow: auto;
`;

export const Main = styled.div`
  .game-status-container {
    text-align: center;
    justify-self: center;
    align-self: center;
    width: 100%;
    padding: 10;
    font-size: 23px;
    z-index: 10;

    .game-status {
      background-color: rgba(255, 255, 255, 0.4);
      display: inline-flex;
      position: fixed;

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
  .board-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;

export const StyledScroller = styled.div`
  position: absolute;
  width: ${({ countCols }) =>
    Math.min(countCols * (CELL_WIDTH + 2), BOARD_CONTAINER_WIDTH)}px;
  height: ${({ countRows }) =>
    Math.min(countRows * (CELL_WIDTH + 2), BOARD_CONTAINER_HEIGHT)}px;
`;
