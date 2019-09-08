import mapValues from "lodash.mapvalues";

const types = {
  REQUEST_TAGS: null,
  RECEIVED_TAGS_SUCCESS: null,
  ADD_TAG: null
};

export default mapValues(types, (value, key) => key);
