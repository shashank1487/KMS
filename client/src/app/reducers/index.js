import { combineReducers } from "redux";
import tags from "./tags";
import alerts from "./alert";

export default combineReducers({
  tags,
  alerts
});
