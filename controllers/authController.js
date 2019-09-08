const User = require("../models/userModel");
const { asyncWrapper } = require("../utils/helper");

exports.signup = asyncWrapper(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    designation,
    password,
    passwordConfirm,
    role = "contributor"
  } = req.body;

  const newUser = await User.create({
    firstName,
    lastName,
    designation,
    email,
    password,
    passwordConfirm,
    role
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser
    }
  });
});
