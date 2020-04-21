import { posToString } from "./index";

export const getListOfNeighbors = (row, col, height, width) => {
  debugger;
  if (typeof row === "string") {
    width = height;
    height = col;

    const match = row.match(/row:([0-9]+),col:([0-9]+)/);
    row = Number(match[1]);
    col = Number(match[2]);
  }
  debugger;
  const list = [];
  for (let i = Math.max(0, row - 1); i <= Math.min(height - 1, row + 1); i++) {
    for (let j = Math.max(0, col - 1); j <= Math.min(width - 1, col + 1); j++) {
      list.push([i, j]);
    }
  }
  return list;
};

export const countMinesAroundCell = (indexes, height, width, map) => {
  return getListOfNeighbors(indexes, height, width).filter(
    ([i, j]) => map[posToString(i, j)]
  ).length;
};
