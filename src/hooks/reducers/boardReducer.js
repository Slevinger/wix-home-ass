import pick from "lodash/pick";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "clickCell":
      const { indexes: cellToClick } = payload;
      return { ...state, clicked: { ...state.clicked, [cellToClick]: 1 } };

    case "flagCell":
      const { indexes: cellToFlag } = payload;
      return {
        ...state,
        flagged: { ...state.flagged, [cellToFlag]: 1 }
      };

    case "unFlagCell":
      const { indexes: cellToUnFlag } = payload;
      return {
        ...state,
        flagged: pick(
          state.flagged,
          Object.keys(state.flagged).filter(key => key !== cellToUnFlag)
        )
      };
    case "reset":
      const newBoard = payload;
      return { ...state, superman: false, ...newBoard };
    case "setSuperman":
      const { isSuperman } = payload;
      return { ...state, superman: isSuperman };
    case "reveal":
      const { listOfCellsToReaveal } = payload;
      return {
        ...state,
        clicked: { ...state.clicked, ...listOfCellsToReaveal }
      };
    case "endGame":
      const { status } = payload;
      return { ...state, superman: true, status };
    case "gemeWon":
      return { ...state, flagged: state.mines, status: "WON" };
    default:
      return state;
  }
};
