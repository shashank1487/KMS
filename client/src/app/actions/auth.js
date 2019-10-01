import { postData } from "../utils/apiHelper";
import { prepareEndpoint } from "../utils/endpoints";
import * as CONSTANTS from "../utils/constants";
import types from "./types";

export const register = userDetails => async dispatch => {
  debugger;
  const url = prepareEndpoint(CONSTANTS.SIGNUP_API);
  const body = JSON.stringify(userDetails);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const response = await postData(url, body, config);
    if (response.status === 201) {
      dispatch({ type: types.REGISTER_SUCCESS, payload: response.data });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: types.REGISTER_FAILURE });
  }
};
