import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  ID: Number;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  city: String;
  street: String;
  role: Boolean;
  generateToken: (ID: Number, email: String, password: String) => String;
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
