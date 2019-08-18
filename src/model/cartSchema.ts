import * as mongoose from "mongoose";
import cartItemSchema from "../model/cartItemSchema";
import { Icart } from "./modelInterfece";
const cartSchema = new mongoose.Schema({
  UserId: {
    type: Number,
    required: true
    //FIX- need to be reference to user schema
  },
  date: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: Boolean,
    required: true
  }
});
const Cart = mongoose.model<Icart>("Cart", cartSchema);
export default Cart;
