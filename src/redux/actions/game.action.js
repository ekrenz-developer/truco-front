import { SET_CURRENT_TABLE } from "../../consts/actionTypes";

export const setCurrentTableAction = (payload) => ({
  type: SET_CURRENT_TABLE,
  payload,
});