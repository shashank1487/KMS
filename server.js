const dotenv = require("dotenv");
const mongoose = require("mongoose");

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
    useFindAndModify: false
  })
  .then(() => console.log("Database connection successful"))
  .catch(err => console.log(err));

const app = require("./app");

const port = PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});

module.exports = app;
