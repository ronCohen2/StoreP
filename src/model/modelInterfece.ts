import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  city: String;
  Street: String;
}
