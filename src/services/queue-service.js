export const Queue = () => {
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
