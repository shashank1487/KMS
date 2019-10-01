const CONSTANTS = require("../utils/constants");

class AppError extends Error {
  constructor(message, statusCode) {
    console.log(message);
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4")
      ? CONSTANTS.BAD_REQUEST
      : CONSTANTS.ERROR;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
