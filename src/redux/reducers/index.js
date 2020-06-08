import { combineReducers } from "redux";
import chat from "./chat.reducer";
import table from "./table.reducer";

const rootReducer = combineReducers({
  chat,
  table,
});

export default rootReducer;
