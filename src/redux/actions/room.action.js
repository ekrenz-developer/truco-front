import { 
  GET_TABLES_START, 
  GET_TABLES_ERROR, 
  GET_TABLES_COMPLETE,
  GET_ROOMS_START,
  GET_ROOMS_ERROR,
  GET_ROOMS_COMPLETE
} from "../../consts/actionTypes";

export const getTablesAction = (payload) => ({
  type: GET_TABLES_START,
  payload,
});

export const getRoomsAction = () => ({
  type: GET_ROOMS_START,
});