import React from "react";

export const posToString = (row, col) => `row:${row},col:${col}`;

const Queue = () => {
  const _queue = [];
  const _visited = {};
  const push = obj => {
    if (!_visited[obj]) {
      _queue.push(obj);
      _visited[obj] = obj;
    }
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
    didVisit: obj => !!_visited[obj],
    getVisited: () => _visited,
    isEmpty: () => {
      return _queue.length === 0;
    }
  };
};

export default class Board {
  map;

  neighbors;

  constructor() {
    this.reset();
  }

  reset(rows, cols, countMines) {
    this.map = {};
    this.mines = {};
    this.board = [];
    this.neighbors = {};
    this.rows = rows;
    this.cols = cols;
    this.countMines = countMines;
    this.clicked = {};
  }

  getListOfNeighbors(row, col) {
    if (typeof row === "string") {
      const match = row.match(/row:([0-9]+),col:([0-9]+)/);
      row = Number(match[1]);
      col = Number(match[2]);
    }
    const list = [];
    for (
      let i = Math.max(0, row - 1);
      i <= Math.min(this.rows - 1, row + 1);
      i++
    ) {
      for (
        let j = Math.max(0, col - 1);
        j <= Math.min(this.cols - 1, col + 1);
        j++
      ) {
        list.push([i, j]);
      }
    }
    return list;
  }

  getNeighborsCount(indexes) {
    return this.getListOfNeighbors(indexes).filter(
      ([i, j]) => this.map[posToString(i, j)]
    ).length;
  }
  traverseFrom(startIndexes) {
    const queue = Queue();
    const visited = {};
    queue.push(startIndexes);
    while (!queue.isEmpty()) {
      const indexes = queue.pop();
      console.log("visited", queue.getVisited());

      const neighbors = this.getListOfNeighbors(indexes);

      for (let i = 0; i < neighbors.length; i++) {
        const [row, col] = neighbors[i];
        const strIndexes = posToString(row, col);
        visited[strIndexes] = 1;
        if (!this.neighbors[strIndexes] && !this.clicked[strIndexes]) {
          queue.push(strIndexes);
        }
      }
    }

    return visited;
  }

  createBoard(rows, cols, countMines) {
    this.reset(rows, cols);
    let minesLeft = countMines;
    let cellsLeft = rows * cols;
    const neighboard = [];

    for (let i = 0; i < rows; i++) {
      this.board.push([]);
      for (let j = 0; j < cols; j++) {
        if (minesLeft / cellsLeft >= Math.random()) {
          this.mines[posToString(i, j)] = 1;
          minesLeft--;
        }

        this.map[posToString(i, j)] = this.mines[posToString(i, j)] || 0;
        this.board[i].push(this.map[posToString(i, j)]);
        cellsLeft--;
      }
    }
    debugger;
    for (let i = 0; i < this.board.length; i++) {
      neighboard.push([]);
      for (let j = 0; j < this.board[i].length; j++) {
        const indexesStr = posToString(i, j);
        const count = this.getNeighborsCount(indexesStr);
        neighboard[i].push(count);
        this.neighbors[indexesStr] = count;
      }
    }
    debugger;

    console.log(this.neighbors);

    const boardRefs = Object.keys(this.map).reduce(
      (acc, cellKey) => ({
        ...acc,
        [cellKey]: React.createRef()
      }),
      {}
    );

    return {
      countMines,
      clicked: this.clicked,
      board: this.board,
      mines: this.mines,
      map: this.map,
      neighbors: this.neighbors,
      boardRefs
    };
  }
}
