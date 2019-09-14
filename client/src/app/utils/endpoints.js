const endpoints = {
  GetAllTags: "/api/v1/tags"
};

export const prepareEndpoint = name => {
  return endpoints[name];
};
