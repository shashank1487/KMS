const AppError = require("../error/appError");
const CONSTANTS = require("../utils/constants");

/**
 * Helper for error messages in dev mode
 * @param  { The error object} err
 * @param  { The response object} res
 */
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err
  });
};

/**
 * Helper for error messages in prod mode
 * @param  { The error object} err
 * @param  { The response object} res
 * Sends a valid error message if the error is an operational error else sends a generic error message
 */
const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    res.status(500).json({
      status: CONSTANTS.ERROR,
      message: CONSTANTS.GENERIC_ERROR_MESSAGE
    });
  }
};

/**
 * Helper for cast errors thrown from mongo
 * @param  {The error object} err
 * Returns a custom AppError with meaningful message
 */
const handleCastErrorDB = err => {
  const message = `Invalid ${err.path} : ${err.value}`;
  return new AppError(message, 400);
};

/**
 * Helper for duplicate field errors thrown from mongo
 * @param  {The error object} err
 * Returns a custom AppError with meaningful message
 */
const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/"(.*?)"/)[0].replace(/['"]+/g, "");
  const message = `Duplicate field value: ${value}. Please use another value`;
  return new AppError(message, 400);
};

/**
 * Helper for validation errors thrown from mongo
 * @param  {The error object} err
 * Returns a custom AppError with meaningful message
 */
const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(
    (error, idx) => `${idx + 1}).${error.message}`
  );
  const message = `Invalid input data: ${errors.join(". ")}`;
  return new AppError(message, 400);
};

/**
 * Helper for jwt errors
 * Returns a custom AppError with meaningful message
 */
const handleJWTError = () => new AppError(CONSTANTS.INVALID_TOKEN_MESSAGE, 401);

/**
 * Helper for expired jwt errors
 * Returns a custom AppError with meaningful message
 */
const handleJWTExpiredError = () =>
  new AppError(CONSTANTS.EXPIRED_TOKEN_MESSAGE, 401);

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = { ...err, message: err.message };

  const mode = process.env.NODE_ENV;
  switch (mode) {
    case CONSTANTS.DEV_MODE:
      sendErrorDev(err, res);
      break;
    case CONSTANTS.PROD_MODE:
      if (error.name === CONSTANTS.CAST_ERROR) error = handleCastErrorDB(error);
      else if (error.code === 11000) error = handleDuplicateFieldsDB(error);
      else if (error.name === CONSTANTS.VALIDATION_ERROR)
        error = handleValidationErrorDB(error);
      else if (error.name === CONSTANTS.JSON_WEB_TOKEN_ERROR)
        error = handleJWTError();
      else if (error.name === CONSTANTS.JSON_WEB_TOKEN_EXPIRED_ERROR)
        error = handleJWTExpiredError(error);
      sendErrorProd(error, res);
      break;
    default:
      break;
  }
};
