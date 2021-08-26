import { combineReducers } from "redux";
import user from "./User";

const rootReducer = combineReducers({
  user: user
})

export default rootReducer;
