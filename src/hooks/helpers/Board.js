import { countMinesAroundCell } from "../../services/get-list-of-neighbors";
import { posToString } from "../../services";

export const createBoard = (rows, cols, countMines) => {
  const map = {};
  const mines = {};
  const neighbors = {};
  const board = [];
  let minesLeft = countMines;
  let cellsLeft = rows * cols;
  const neighboard = [];

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

  for (let i = 0; i < board.length; i++) {
    neighboard.push([]);
    for (let j = 0; j < board[i].length; j++) {
      const indexesStr = posToString(i, j);
      const count = countMinesAroundCell(indexesStr, rows, cols, map);
      neighboard[i].push(count);
      neighbors[indexesStr] = count;
    }
  }
  debugger;
  return {
    countMines,
    width: cols,
    height: rows,
    status: "GAME ON",
    clicked: {},
    board: board,
    mines: mines,
    map: map,
    neighbors: neighbors
  };
};
