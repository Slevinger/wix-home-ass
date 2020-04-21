import { Queue } from "./queue-service";
import { getListOfNeighbors } from "./get-list-of-neighbors";
import { posToString } from "./index.js";
export const traverseFrom = (startIndexes, state) => {
  const queue = Queue();
  const visited = {};
  const { clicked, neighbors, width, height } = state;
  queue.push(startIndexes);
  while (!queue.isEmpty()) {
    const indexes = queue.pop();

    const immediateNeighbors = getListOfNeighbors(indexes, width, height);

    for (let i = 0; i < immediateNeighbors.length; i++) {
      const [row, col] = immediateNeighbors[i];
      const strIndexes = posToString(row, col);
      visited[strIndexes] = 1;
      if (!neighbors[strIndexes] && !clicked[strIndexes]) {
        queue.push(strIndexes);
      }
    }
  }

  return visited;
};
