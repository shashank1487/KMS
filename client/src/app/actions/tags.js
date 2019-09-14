import types from "./types";

export const addTag = newTag => {
  return {
    type: types.ADD_TAG,
    payload: { data: newTag }
  };
};
