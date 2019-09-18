import types from "../actions/types";

export const initialState = [];

export default (state = initialState, action) => {
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
