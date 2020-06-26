import { SET_CURRENT_TABLE } from "../../consts/actionTypes";

const initialState = {
  currentTable: undefined,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TABLE:
      return {
        ...state,
        currentTable: action.payload,
      };
      break;
    default:
      return { ...state };
  }
};

export default game;
