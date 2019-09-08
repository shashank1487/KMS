import types from "../actions/types";

const defaultState = {
  tags: []
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case types.RECEIVED_TAGS_SUCCESS:
      return {
        ...state,
        tags: [...action.payload.tags]
      };
    default:
      return state;
  }
};
