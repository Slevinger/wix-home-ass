import pick from "lodash/pick";

export const initialState = {
  neighbors: {},
  flagged: {},
  map: {},
  mines: {},
  board: [],
  clicked: {},
  status: "NOT READY",
  superman: false,
  flaggedMinesCount: 0,
  countFlags: 0
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "addCellToClickedMap":
      const { indexes: clickedCell } = payload;
      return { ...state, clicked: { ...state.clicked, [clickedCell]: 1 } };

    case "decFlaggedMinesCount":
      return {
        ...state,
        flaggedMinesCount: state.flaggedMinesCount - 1
      };
    case "incFlaggedMinesCount":
      return {
        ...state,
        flaggedMinesCount: state.flaggedMinesCount + 1
      };
    case "flagCell":
      const { indexes: cellToFlag } = payload;
      return {
        ...state,
        countFlags: state.countFlags + 1,
        flagged: { ...state.flagged, [cellToFlag]: 1 }
      };

    case "unFlagCell":
      const { indexes: cellToUnFlag } = payload;
      return {
        ...state,
        countFlags: state.countFlags - 1,
        flagged: pick(
          state.flagged,
          Object.keys(state.flagged).filter(key => key !== cellToUnFlag)
        )
      };
    case "reset":
      const newBoard = payload;
      return { ...initialState, ...newBoard };
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
