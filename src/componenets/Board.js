import React from "react";
import { StyledBoard, StyledBoardContainer } from "./StyledComponents";
import Loading from "./Loading";
import DataWrapper from "./DataWrapper";

export default boardHook => {
  const {
    state: { countMines, countFlags, board, status },
    loading
  } = boardHook;
  const minesLeft = countMines - countFlags;
  return (
    <div className="board-page">
      {loading && <Loading />}
      <StyledBoardContainer>
        {minesLeft === 0 && status !== "WON" && (
          <div style={{ color: "red" }}>No More Flags</div>
        )}

        <StyledBoard
          status={status}
          countCols={board[0].length}
          countRows={board.length}
        >
          <DataWrapper {...boardHook} />
        </StyledBoard>
      </StyledBoardContainer>
    </div>
  );
};
