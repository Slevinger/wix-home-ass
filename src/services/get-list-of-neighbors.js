import { posToString } from "./index";

/*
according to matrix dimensions returns an array of cells : [row,col] that are adjacent to cell indexes
*/

export const getListOfNeighbors = (indexes, height, width) => {
  const match = indexes.match(/row:([0-9]+),col:([0-9]+)/);
  const row = Number(match[1]);
  const col = Number(match[2]);

  const list = [];
  for (let i = Math.max(0, row - 1); i <= Math.min(height - 1, row + 1); i++) {
    for (let j = Math.max(0, col - 1); j <= Math.min(width - 1, col + 1); j++) {
      list.push([i, j]);
    }
  }
  return list;
};

// according to cell indexes ,the dimensions of the matrix, and the map telling us is thee a mine for each cell
// get count the total amunt of mines around each cell
export const countMinesAroundCell = (indexes, height, width, map) => {
  return getListOfNeighbors(indexes, height, width).filter(
    ([i, j]) => map[posToString(i, j)]
  ).length;
};
