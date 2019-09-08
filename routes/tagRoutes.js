const express = require("express");
const { getTags, addTag } = require("../controllers/tagController");

const router = express.Router();

router
  .route("/")
  .get(getTags)
  .post(addTag);

module.exports = router;
