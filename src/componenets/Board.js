import React, { useState } from "react";
import { StyledBoard, StyledBoardContainer } from "./StyledComponents";
import SingleCell from "./SingleCell";
import Spinner from "react-bootstrap/Spinner";
import Loading from "./Loading";

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
  loading,
  endGame,
  toggleFlag,
  clickCell,
  reveal
}) => {
  const minesLeft = countMines - (Object.keys(flagged).length || 0);
  const [cellWidth, setCellWidth] = useState(30);
  return (
    <div className="board-page">
      {loading && <Loading />}
      <StyledBoardContainer>
        {minesLeft === 0 && status !== "WON" && (
          <div style={{ color: "red" }}>No More Flags</div>
        )}

        <StyledBoard
          cellWidth={cellWidth}
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
