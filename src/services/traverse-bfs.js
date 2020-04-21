import { Queue } from "./queue-service";
import { getListOfNeighbors } from "./get-list-of-neighbors";
import { posToString } from "./index.js";
export const traverseFrom = (startIndexes, state) => {
  const queue = Queue(); // a queue to manage BFS traverse
  const visited = {}; // a list of all cells visited in the traverse
  const {
    clicked: cellsAlreadyVisible,
    neighbors: countMinesAroundCells,
    width,
    height
  } = state;
  queue.push(startIndexes);
  while (!queue.isEmpty()) {
    const indexes = queue.pop();

    const immediateNeighbors = getListOfNeighbors(indexes, width, height);

    for (let i = 0; i < immediateNeighbors.length; i++) {
      const [row, col] = immediateNeighbors[i];
      const strIndexes = posToString(row, col);
      visited[strIndexes] = 1;
      if (
        !countMinesAroundCells[strIndexes] &&
        !cellsAlreadyVisible[strIndexes]
      ) {
        queue.push(strIndexes);
      }
    }
  }

  return visited;
};
