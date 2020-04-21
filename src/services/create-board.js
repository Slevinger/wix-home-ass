import {
  countMinesAroundCell,
  getListOfNeighbors
} from "./get-list-of-neighbors";
import { posToString } from ".";
import { resolve } from "q";

export const createBoard = (rows, cols, countMines) => {
  const map = {}; // a map from cell indexes to its value, (1|0  mine|no mine)  {'row:*,col:*':0|1}
  const mines = {}; // a map of all the mines from cell indexes to its value, (1  mine)  {'row:*,col:*':1} TODO: remove and use selector
  const board = []; // a matrix that represents the board was created mainly for debugging, TODO: remove from state
  let minesLeft = countMines; // to make the mines spread evenly across the board i need to keep track on the amount of mines left to place
  let cellsLeft = rows * cols; // to make the mines spread evenly across the board i need to keep track on the amount of cells left to place mines in

  for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let j = 0; j < cols; j++) {
      if (minesLeft / cellsLeft >= Math.random()) {
        // this formula makes sure that i have an even spread of mines across the board
        mines[posToString(i, j)] = 1; // this can be easily proved using reduction.
        minesLeft--;
      }

      map[posToString(i, j)] = mines[posToString(i, j)] || 0;
      board[i].push(map[posToString(i, j)]);
      cellsLeft--;
    }
  }

  // neighbors : a map from cell indexes to the count of mines around it
  const neighbors = {};
  Object.keys(mines).forEach(indexesStr => {
    const mineNeigbors = getListOfNeighbors(indexesStr, rows, cols);
    mineNeigbors.forEach(([row, col]) => {
      neighbors[posToString(row, col)] =
        (neighbors[posToString(row, col)] || 0) + 1;
    });
  });

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
