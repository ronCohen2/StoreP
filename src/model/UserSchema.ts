import * as mongoose from "mongoose";
import { IUser } from "./modelInterfece";

const UserSchema = new mongoose.Schema({
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
    maxlength: 20
  },
  street: {
    type: String,
    minlength: 2,
    maxlength: 20
  }
});
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
