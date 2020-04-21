export default () => {
  return (
    <Grid
      cellRenderer={({ columnIndex, key, rowIndex, style }) => {
        const indexes = posToString(rowIndex, columnIndex);
        const cellStatus = {isCellClicked:clicked[indexes],isCellFlagged:flagged[indexes],isCellMined=map[indexes]}
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
              countMinesAroundCell={neighbors[indexes]}
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
      overscanColumnCount={20}
      overscanRowCount={20}
      rowCount={numRows}
      rowHeight={30}
      width={800}
    />
  );
};
