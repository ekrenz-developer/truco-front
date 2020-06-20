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

export const getRandomRoom = () => ({
  type: GET_RANDOM_ROOM_START,
})

export const setCurrentRoom = (payload) => ({
  type: SET_CURRENT_ROOM,
  payload,
});