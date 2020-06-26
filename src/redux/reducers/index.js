import { combineReducers } from "redux";
import chat from "./chat.reducer";
import room from "./room.reducer";
import game from "./game.reducer";

const rootReducer = combineReducers({
  chat,
  room,
  game,
});

export default rootReducer;
