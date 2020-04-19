const posToString = (row, col) => `row:${row},col${col}`;

const getRandom = max => Math.floor(Math.random() * max);

export const createBoard = (rows, cols, countMines) => {
  debugger;
  const map = {};
  const board = [];
  const mines = {};
  let minesLeft = countMines;
  let cellsLeft = rows * cols;
  const getNeighborsCount = (row, col) => {
    if (typeof row === "string") {
      const match = row.match(/row:([\d]+),col([\d+])/);
      row = Number(match[1]);
      col = Number(match[2]);
    }
    const indexes = { rows: null, cols: null };
    indexes.rows = [Math.max(0, row - 1), Math.min(rows, row + 1)];
    indexes.cols = [Math.max(0, col - 1), Math.min(cols, col + 1)];
    let count = 0;
    for (let i = indexes.rows[0]; i <= indexes.rows[1]; i++) {
      for (let j = indexes.cols[0]; j <= indexes.cols[1]; j++) {
        if (mines[posToString(i, j)]) {
          count++;
        }
      }
    }
    return count;
  };

  for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let j = 0; j < cols; j++) {
      if (minesLeft / cellsLeft >= Math.random()) {
        mines[posToString(i, j)] = 1;
        minesLeft--;
      }

      map[posToString(i, j)] = mines[posToString(i, j)] || 0;
      board[i].push(map[posToString(i, j)]);
      cellsLeft--;
    }
  }
  debugger;
  return {
    board,
    mines,
    map,
    getNeighborsCount
  };
};
