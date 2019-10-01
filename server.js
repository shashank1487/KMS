const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({
  path: "./config.env"
});

const { PORT, MONGO_CONNECTION_STRING, MONGO_PASSWORD } = process.env;

const CONNECTION_STRING = MONGO_CONNECTION_STRING.replace(
  "<PASSWORD>",
  MONGO_PASSWORD
);
mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Database connection successful"));

const app = require("./app");

const port = PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});

process.on("unhandledRejection", err => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
