import * as mongoose from "mongoose";
import { IOrder } from "../model/modelInterfece";
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  cartId: {
    type: String,
    required: true
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
    type: Date,
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
