//MODES
exports.DEV_MODE = "development";
exports.PROD_MODE = "production";

//MESSAGES
exports.SUCCESS = "success";
exports.ERROR = "error";
exports.BAD_REQUEST = "bad request";
exports.GENERIC_ERROR_MESSAGE =
  " Something went wrong! Please contact the administrator!";
exports.LOGIN_ERROR_MESSAGE = "Please provide email and password";
exports.INVALID_CREDENTIALS_MESSAGE = "Incorrect email or password";
exports.TOKEN_NOT_AVAILABLE_MESSAGE =
  "You are not logged in! Please login to get access";
exports.INVALID_TOKEN_MESSAGE = "Invalid token! Please login again";
exports.EXPIRED_TOKEN_MESSAGE = "Your token has expired! Please login again";
exports.PASSWORD_CHANGED_MESSAGE =
  "You changed your password recently! Please login again";
exports.INSUFFICIENT_PRIVILEGES =
  "You do not have the necessary privileges to perform this action";

//ERRORS
exports.CAST_ERROR = "CastError";
exports.VALIDATION_ERROR = "ValidationError";
exports.JSON_WEB_TOKEN_ERROR = "JsonWebTokenError";
exports.JSON_WEB_TOKEN_EXPIRED_ERROR = "TokenExpiredError";
exports.USER_DOES_NOT_EXIST_FOR_JSON_WEB_TOKEN =
  "The user for the issued token no longer exists";

//PASSWORD HASHING
exports.SALT_ROUNDS = 12;

//ROLES
exports.CONTRIBUTOR = "contributor";
exports.ADMIN = "admin";

//TOKEN
exports.BEARER = "Bearer";
