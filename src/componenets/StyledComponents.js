import styled, { css } from "styled-components";

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

export const FlagsRemainderContainer = styled.div``;

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
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: solid thin black;
  background-color: ${({ clicked, superman }) =>
    clicked ? "rgba(0,10,10,0.2)" : superman ? "rgba(0,40,40,0.1)" : "white"};
  &:hover {
    background-color: "lightgray";
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
  position: absolute;
  left: 40%;
  top: 20%;
  width: ${({ countCols }) => (countCols + 1) * 40}px;
`;
