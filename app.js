const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const tagRouter = require("./routes/tagRoutes");
const constants = require("./utils/constants");

const AppError = require("./error/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === constants.DEV_MODE) {
  app.use(morgan("dev"));
}

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tags", tagRouter);

app.all("*", (req, res, next) => {
  const err = new AppError(
    `Can't find the ${req.originalUrl} on this server`,
    404
  );
  next(err);
});

app.use(globalErrorHandler);
module.exports = app;
