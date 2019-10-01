import mapValues from "lodash.mapvalues";

const types = {
  REQUEST_TAGS: null,
  RECEIVED_TAGS_SUCCESS: null,
  RECEIVED_TAGS_FAILURE: null,
  ADD_TAG: null,
  SET_ALERT: null,
  REMOVE_ALERT: null,
  REGISTER_SUCCESS: null,
  REGISTER_FAILURE: null
};

export default mapValues(types, (value, key) => key);
