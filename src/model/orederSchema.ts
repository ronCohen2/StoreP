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
    type: String,
    required: [true, "Street is required."]
  },
  shipDate: {
    type: String,
    required: [true, "Ship date  is required."]
  },
  data: {
    type: Date,
    default: Date.now()
  },
  creditCard: {
    type: Number,
    required: [true, "Credit card  is required."]
  }
});
const Order = mongoose.model<IOrder>("Order", orderSchema);
export default Order;
