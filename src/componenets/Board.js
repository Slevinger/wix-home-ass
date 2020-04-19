import React from "react";
import { StyledBoard, StyledCell } from "./StyledComponents";
import SingleCell from "./SingleCell";
export default ({ mines, map, board, getNeighborsCount, superman }) => {
  console.log(mines);
  debugger;
  return (
    <StyledBoard countCols={board[0].length} countRows={board.length}>
      {Object.keys(map).map((indexes, index) => (
        <SingleCell
          id={index}
          count={getNeighborsCount(indexes)}
          indexes={indexes}
          value={map[indexes]}
          superman={superman}
        />
      ))}
    </StyledBoard>
  );
};
