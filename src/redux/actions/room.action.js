import { 
  GET_TABLES_START, 
  GET_ROOMS_START,
  GET_RANDOM_ROOM_START,
  SET_CURRENT_ROOM
} from "../../consts/actionTypes";

export const getTablesAction = (payload) => ({
  type: GET_TABLES_START,
  payload,
});

export const getRoomsAction = () => ({
  type: GET_ROOMS_START,
});

export const getRandomRoomAction = () => ({
  type: GET_RANDOM_ROOM_START,
})

export const setCurrentRoomAction = (payload) => ({
  type: SET_CURRENT_ROOM,
  payload: payload,
});