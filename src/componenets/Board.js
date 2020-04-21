import React from "react";
import { StyledBoard, StyledBoardContainer } from "./StyledComponents";
import SingleCell from "./SingleCell";
import Loading from "./Loading";
import { Grid } from "react-virtualized";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import { posToString } from "../services/index";
export default ({
  state: {
    map,
    height: numRows,
    width: numColumns,
    countMines,
    countFlags,
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
          <Grid
            cellRenderer={({ columnIndex, key, rowIndex, style }) => {
              const indexes = posToString(rowIndex, columnIndex);
              return (
                <div style={style} key={key}>
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
                </div>
              );
            }}
            columnCount={numColumns}
            columnWidth={30}
            height={600}
            overscanColumnCount={numColumns / 10}
            overscanRowCount={numRows / 10}
            rowCount={numRows}
            rowHeight={30}
            width={800}
          />
        </StyledBoard>
      </StyledBoardContainer>
    </div>
  );
};
