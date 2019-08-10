import * as mongoose from "mongoose";
import cartItemSchema from "../model/cartItemSchema";
import { Icart } from "./modelInterfece";
const cartSchema = new mongoose.Schema({
  UserId: {
    type: Number,
    required: true
  },
  date: {
    default: Date.now(),
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  items: {
    type: cartItemSchema,
    required: true
  }
});
const cart = mongoose.model<Icart>("Cart", cartSchema);
export default cart;
