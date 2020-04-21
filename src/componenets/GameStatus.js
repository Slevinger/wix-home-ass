import React from "react";

export default props => {
  const { status, flagged, countMines } = props;
  const minesLeft = countMines - (Object.keys(flagged).length || 0);

  return (
    <div className="game-status-container">
      <div className="game-status">
        {`Flags Lefts : (${minesLeft}) `}
        <text className={status.replace(" ", "_")} style={{ marginLeft: 10 }}>
          {status}
        </text>
      </div>
    </div>
  );
};
