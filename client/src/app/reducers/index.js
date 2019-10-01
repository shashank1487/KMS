import { combineReducers } from "redux";
import tags from "./tags";
import alerts from "./alert";
import auth from "./auth";

export default combineReducers({
  tags,
  alerts,
  auth
});
