import * as mongoose from "mongoose";
import { IUser } from "./modelInterfece";

const UserSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    minlength: 5,
    maxlength: 15,
    required: true
  },
  lastName: {
    type: String,
    minlength: 5,
    maxlength: 15,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"]  
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
    maxlength: 20
  },
  street: {
    type: String,
    minlength: 2,
    maxlength: 20
  },
  role: {
    type: Boolean,
    required: true
  }
});
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
