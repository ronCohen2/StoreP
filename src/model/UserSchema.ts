import * as mongoose from "mongoose";
import { IUser } from "./modelInterfece";
import * as jwt from "jsonwebtoken";
import { isEmail } from "validator";

const keys = require("../config/keys");

const UserSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 15
    // required: true
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 15
    // required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Email address is required"
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 200,
    required: [true, "password  is required"]
  },
  city: {
    type: String,
    minlength: 2,
    maxlength: 20
    // required: [true, "city  is required"]
  },
  street: {
    type: String,
    minlength: 2,
    maxlength: 20
    // required: true
  },
  phone: {
    type: Number,
    trim: true
    // required: true
  },
  role: {
    type: Boolean,
    default: false
  },
  status: {
    type: Number,
    required: true,
    default: 0
  }
});
UserSchema.methods.generateToken = (
  ID: Number,
  email: String,
  password: String,
  role: Boolean
) => {
  const token = jwt.sign(
    {
      id: ID,
      email,
      password,
      role
    },
    keys.secretOrKey,
    { expiresIn: 3600 }
  );
  return token;
};
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
