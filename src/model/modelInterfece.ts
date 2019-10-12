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
  generateToken: (
    ID: Number,
    email: String,
    password: String,
    role: Boolean
  ) => String;
}
export interface ICategory extends mongoose.Document {
  categoryName: String;
  image: String;
}

export interface IProduct extends mongoose.Document {
  productName: String;
  categoryId: String;
  price: Number;
  image: String;
}

export interface IcartItem extends mongoose.Document {
  name: String;
  product: any;
  quantity: Number;
  totalPrice: Number;
  cartId: String;
}

export interface Icart extends mongoose.Document {
  UserId: String;
  // date: any;
  status: Number;
  items?: any;
  date: any;
}
export interface IContact extends mongoose.Document {
  name: String;
  // date: any;
  email: String;
  text: String;
  status: Boolean;
  items?: any;
  date: any;
}

export interface IOrder extends mongoose.Document {
  userId: String;
  cartId: String;
  totalPrice: Number;
  city: String;
  street: String;
  shipDate: Date;
  creditCard: Number;
}
