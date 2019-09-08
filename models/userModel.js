const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { SALT_ROUNDS } = require("../utils/constants");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide your first name"]
  },
  lastName: { type: String, required: [true, "Please provide your last name"] },
  designation: {
    type: String,
    required: [true, "Please provide your designation"]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function(val) {
        return val === this.password;
      },
      message: "Password and confirmation password are not same"
    }
  },
  role: {
    type: String,
    required: [true, "Please provide a user role"]
  }
});

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
