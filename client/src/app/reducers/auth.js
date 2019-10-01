import Cookies from "universal-cookie";

import envConfig from "../services/helpers/environmentConfig";
import types from "../actions/types";

let cookies = new Cookies();

const initialState = {
  token: cookies.set(envConfig.USER_TOKEN),
  isAuthenticated: false,
  loading: true,
  user: null
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_SUCCESS:
      cookies.set(envConfig.USER_TOKEN, payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        user: { ...payload.data.user }
      };

    case types.REGISTER_FAILURE:
      cookies.remove(envConfig.USER_TOKEN);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
};
