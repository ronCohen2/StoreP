import * as mongoose from "mongoose";
import { StringLiteral } from "babel-types";

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
}

export interface IProduct extends mongoose.Document {
  productName: String;
  categoryId: String;
  price: Number;
  image: String;
}

export interface IcartItem extends mongoose.Document {
  product: any;
  quantity: Number;
  totalPrice: Number;
  cartId: String;
}

export interface Icart extends mongoose.Document {
  userId: String;
  cartId: String;
  date: Date;
  status: Boolean;
  products?: any;
}
