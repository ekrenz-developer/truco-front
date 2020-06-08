import { GET_TABLES_START, GET_TABLES_ERROR, GET_TABLES_COMPLETE } from "../../consts/actionTypes";

export const getTables = (payload) => ({
  type: GET_TABLES_START,
  payload,
});