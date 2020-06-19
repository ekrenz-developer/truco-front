import { combineReducers } from "redux";
import chat from "./chat.reducer";
import room from "./room.reducer";

const rootReducer = combineReducers({
  chat,
  room,
});

export default rootReducer;
