import React from "react";
import { StyledBoard, StyledBoardContainer } from "./StyledComponents";
import SingleCell from "./SingleCell";

export default ({
  state: {
    map,
    countMines,
    board,
    clicked,
    neighbors,
    flagged,
    status,
    superman
  },
  endGame,
  toggleFlag,
  clickCell,
  reveal
}) => {
  const minesLeft = countMines - (Object.keys(flagged).length || 0);
  return (
    <div className="board-page">
      <StyledBoardContainer>
        {minesLeft === 0 && status !== "WON" && (
          <div style={{ color: "red" }}>No More Flags</div>
        )}

        <StyledBoard
          status={status}
          countCols={board[0].length}
          countRows={board.length}
        >
          {Object.keys(map).map((indexes, index) => (
            <SingleCell
              endGame={endGame}
              key={indexes}
              id={indexes}
              clicked={clicked[indexes]}
              clickCell={clickCell}
              reveal={reveal}
              flagged={flagged[indexes]}
              toggleFlag={toggleFlag}
              count={neighbors[indexes]}
              indexes={indexes}
              value={map[indexes]}
              superman={superman}
            />
          ))}
        </StyledBoard>
      </StyledBoardContainer>
    </div>
  );
};
