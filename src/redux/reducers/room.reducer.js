import { 
  GET_TABLES_START, 
  GET_TABLES_ERROR, 
  GET_TABLES_COMPLETE,
  GET_ROOMS_START,
  GET_ROOMS_ERROR,
  GET_ROOMS_COMPLETE
} from "../../consts/actionTypes";

const initialState = {
  tables: undefined,
  isLoading: false,
  currentRoom: undefined,
  rooms: undefined,
  isRoomsLoading: false,
};

const room = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLES_START:
      return {
        ...state,
        isLoading: true
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
        tables: action.response.data.data
      };
      break;
    case GET_ROOMS_START:
      return {
        ...state,
        isRoomsLoading: true
      }
      break;
    case GET_ROOMS_ERROR:
      return {
        ...state,
        isRoomsLoading: false,
        rooms: []
      }
      break;
    case GET_ROOMS_COMPLETE:
      return {
        ...state,
        isRoomsLoading: false,
        rooms: action.response.data.data
      }
      break;
    default:
      return { ...state };
  }
};

export default room;
