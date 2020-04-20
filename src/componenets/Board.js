import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  StyledBoard,
  StyledCell,
  StyledBoardContainer
} from "./StyledComponents";
import SingleCell from "./SingleCell";
import { posToString } from "../hooks/useBoard";

const Queue = () => {
  const _queue = [];
  const push = obj => {
    _queue.push(obj);
  };
  const pop = () => {
    return _queue.splice(0, 1)[0];
  };

  return {
    pop,
    push,
    peek: () => _queue[_queue.length - 1],
    getQueue: () => {
      return _queue;
    },
    isEmpty: () => {
      return _queue.length === 0;
    }
  };
};

export default ({
  state: {
    map,
    countMines,
    board,
    clicked,
    boardRefs,
    neighbors,
    mines,
    flagged,
    thinking
  },
  toggleFlag,
  clickCell,
  superman,
  reveal
}) => {
  if (!boardRefs) {
    return null;
  }
  const minesLeft = countMines - (Object.keys(flagged).length || 0);
  debugger;
  return (
    <StyledBoardContainer>
      {`thinking : ${thinking}`}
      <div
        style={{
          textAlign: "center",
          width: "100%",
          padding: 10,
          fontSize: 23
        }}
      >
        {`Mines Lefts : (${minesLeft})`}
      </div>
      {minesLeft === 0 && <div style={{ color: "red" }}>No More Flags</div>}
      {Object.keys(mines).filter(indxs => flagged[indxs]).length ===
        countMines && <div>You WIN</div>}
      <StyledBoard countCols={board[0].length} countRows={board.length}>
        {Object.keys(map).map((indexes, index) => (
          <SingleCell
            key={indexes}
            id={indexes}
            ref={boardRefs[indexes]}
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
  );
};
