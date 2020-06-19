import { GET_TABLES_START, GET_TABLES_ERROR, GET_TABLES_COMPLETE } from "../../consts/actionTypes";

const initialState = {
  tables: undefined,
  isLoading: false,
  currentRoom: undefined
};

const room = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLES_START:
      return {
        ...state,
        isLoading: true,
      };
      break;
    case GET_TABLES_ERROR:
      return {
        ...state,
        isLoading: false,
        tables: []
      };
      break;
    case GET_TABLES_COMPLETE:
      return {
        ...state,
        isLoading: false,
        tables: action.response.data.data,
      };
      break;
    default:
      return { ...state };
  }
};

export default room;
