import * as mongoose from "mongoose";
import { IUser } from "./modelInterfece";
import * as jwt from "jsonwebtoken";
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
    maxlength: 15,
    required: true
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 15,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 200,
    required: true
  },
  city: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: true
  },
  street: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: true
  },
  role: {
    type: Boolean,
    required: true
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
