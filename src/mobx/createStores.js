import { BoardStore } from "./Stores/BoardStore";

export const createStores = props => {
  const boardStore = new BoardStore();

  return {
    boardStore
  };
};
