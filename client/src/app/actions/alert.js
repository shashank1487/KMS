import uuid from "uuid";

import types from "./types";

export const setAlert = (msg, type) => {
  const id = uuid.v4();
  return { type: types.SET_ALERT, payload: { id, msg, type } };
};

export const removeAlert = id => {
  return { type: types.REMOVE_ALERT, payload: id };
};
