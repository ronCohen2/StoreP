import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  city?: String;
  Street?: String;
  role: Boolean;
}
export interface ICategory extends mongoose.Document {
  categoryName: String;
  categoryId: String;
  price: Number;
  image: String;
}

export interface IProduct extends mongoose.Document {
  productName: String;
  categoryId: String;
  price: Number;
  image: String;
}
