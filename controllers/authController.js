const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

const User = require("../models/userModel");
const { asyncWrapper } = require("../utils/helper");
const AppError = require("../error/appError");
const CONSTANTS = require("../utils/constants");

/**
 * Helper method to generate json web token
 * @param { The id of the user} id
 * Returns the jwt
 */
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

/**
 * The signup method to allow users to sign up.
 * @param  { The request object } req
 * @param  {The response object } res
 * @param  {The next middleware} next
 */
exports.signup = asyncWrapper(async (req, res, next) => {
  const { fullName, email, password, passwordConfirm, role } = req.body;

  const avatar = gravatar.url(email, {
    s: "200",
    r: "pg",
    d: "mm"
  });

  const newUser = await User.create({
    fullName,
    email,
    avatar,
    password,
    passwordConfirm,
    role
  });

  const token = signToken(newUser._id);
  res.status(201).json({
    status: CONSTANTS.SUCCESS,
    token
  });
});

/**
 * The login method to allow users to login in to the system.
 * @param  { The request object } req
 * @param  {The response object } res
 * @param  {The next middleware} next
 */
exports.login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError(CONSTANTS.LOGIN_ERROR_MESSAGE, 400));

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePasswords(password, user.password)))
    return next(new AppError(CONSTANTS.INVALID_CREDENTIALS_MESSAGE), 401);

  const token = signToken(user._id);
  res.status(200).json({
    status: CONSTANTS.SUCCESS,
    token
  });
});

/**
 * The protect middleware to check whether the user is authenticated to access a protected resource.
 * @param  { The request object } req
 * @param  {The response object } res
 * @param  {The next middleware} next
 */
exports.protect = asyncWrapper(async (req, res, next) => {
  // 1). Get token from header and check if it is present
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith(CONSTANTS.BEARER)) {
    [, token] = authorization.split(" ");
  }

  if (!token) {
    return next(new AppError(CONSTANTS.TOKEN_NOT_AVAILABLE_MESSAGE, 401));
  }

  // 2). Verify token validity
  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  // 3). Check if the user still exists after the token was issued
  const user = await User.findById(decodedToken.id);
  if (!user)
    return next(
      new AppError(CONSTANTS.USER_DOES_NOT_EXIST_FOR_JSON_WEB_TOKEN, 401)
    );

  // 4). Check if the user has changed his/her password after the token was issued
  if (user.checkPasswordChanged(decodedToken.iat))
    return next(new AppError(CONSTANTS.PASSWORD_CHANGED_MESSAGE, 401));

  // 5). Grant access to protected route
  req.user = user;
  next();
});

exports.restrict = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(new AppError(CONSTANTS.INSUFFICIENT_PRIVILEGES, 403));
  }
  next();
};
