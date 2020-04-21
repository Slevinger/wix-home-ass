import React from "react";
import { Grid } from "react-virtualized";
import { posToString } from "../services/index";
import SingleCell from "./SingleCell";

export default boardHook => {
  const {
    state: {
      map,
      height: numRows,
      width: numColumns,
      clicked,
      neighbors,
      flagged,
      superman
    },
    toggleFlag,
    clickCell,
    reveal
  } = boardHook;

  return (
    <Grid
      cellRenderer={({ columnIndex, key, rowIndex, style }) => {
        const indexes = posToString(rowIndex, columnIndex);
        const cellStatus = {
          isCellClicked: clicked[indexes],
          isCellFlagged: flagged[indexes],
          isCellMined: map[indexes]
        };

        return (
          <div style={style} key={key}>
            <SingleCell
              key={indexes}
              clickCell={clickCell}
              reveal={reveal}
              toggleFlag={toggleFlag}
              countMinesAroundCell={neighbors[indexes]}
              indexes={indexes}
              superman={superman}
              {...cellStatus}
            />
          </div>
        );
      }}
      columnCount={numColumns}
      columnWidth={30}
      height={600}
      overscanColumnCount={20}
      overscanRowCount={20}
      rowCount={numRows}
      rowHeight={30}
      width={800}
    />
  );
};
