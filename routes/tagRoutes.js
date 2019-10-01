const express = require("express");

const { protect, restrict } = require("../controllers/authController");
const { getTags, addTag } = require("../controllers/tagController");
const CONSTANTS = require("../utils/constants");

const router = express.Router();

router
  .route("/")
  .get(protect, getTags)
  .post(protect, restrict(CONSTANTS.ADMIN), addTag);

module.exports = router;
