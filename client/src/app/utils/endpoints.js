const endpoints = {
  GetAllTags: "/api/v1/tags",
  Signup: "/api/v1/users/signup"
};

export const prepareEndpoint = name => {
  return endpoints[name];
};
