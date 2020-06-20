import { 
  GET_TABLES_START, 
  GET_TABLES_ERROR, 
  GET_TABLES_COMPLETE,
  GET_ROOMS_START,
  GET_ROOMS_ERROR,
  GET_ROOMS_COMPLETE,
  SET_CURRENT_ROOM,
  GET_RANDOM_ROOM_START,
  GET_RANDOM_ROOM_ERROR,
  GET_RANDOM_ROOM_COMPLETE
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
    case GET_RANDOM_ROOM_START:
      return {
        ...state,
        isRandomRoomLoading: true,
      }
      break;
    case GET_RANDOM_ROOM_ERROR:
      return {
        ...state,
        isRandomRoomLoading: false,
      }
      break;
    case GET_RANDOM_ROOM_COMPLETE:
      return {
        ...state,
        isRandomRoomLoading: false,
        randomRoom: action.response.data.data
      }
      break;
    case SET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: action.payload.room
      }
      break;
    default:
      return { ...state };
  }
};

export default room;
