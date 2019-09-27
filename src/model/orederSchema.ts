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
    required: true
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
    type: Number,
    required: true
    // max: 4
  }
});
const Order = mongoose.model<IOrder>("Order", orderSchema);
export default Order;
