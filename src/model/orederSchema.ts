import * as mongoose from "mongoose";
import { IOrder } from "../model/modelInterfece";
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
    //FIX- ref to user schema
  },
  cartId: {
    type: String,
    required: true
    //FIX- ref to cart
  },
  totalPrice: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: [true, "City is required."]
  },
  street: {
    type: String
    // required: true
  },
  shipDate: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now()
  },
  creditCard: {
    type: [Number, "Credit Card can only number"],
    required: true,
    max: [16, "max is 16 digit "]
    // max: 4
  }
});
const Order = mongoose.model<IOrder>("Order", orderSchema);
export default Order;
