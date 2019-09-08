import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers";

const logger = createLogger({
  collapsed: true
});
const middleWares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
