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
`;

export const StyledBoard = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;

  width: ${({ countCols }) => countCols * (CELL_WIDTH + 2)}px;
`;

export const StyledBoardContainer = styled.div`
  position: absolute;
  left: 25%;
  top: 15%;
`;
