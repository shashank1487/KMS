import types from "./types";
import { getData } from "../utils/apiHelper";

export const fetchTags = () => {
  return dispatch => {
    dispatch({ type: types.REQUEST_TAGS });
    getData("/api/v1/tags")
      .then(resp => {
        dispatch({ type: "RECEIVED_TAGS_SUCCESS", payload: resp.data });
      })
      .catch(err => {
        dispatch({ type: "RECEIVED_TAGS_FAILURE", payload: err });
      });
  };
};

export const addTag = newTag => {
  return {
    type: types.ADD_TAG,
    payload: { data: newTag }
  };
};
