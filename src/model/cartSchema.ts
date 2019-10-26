import * as mongoose from "mongoose";
import cartItemSchema from "./CartItemSchema";
import { Icart } from "./modelInterfece";
const cartSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: true
    //FIX- need to be reference to user schema
  },
  date: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: Number,
    default: 1,
    required: true
  }
});
const Cart = mongoose.model<Icart>("Cart", cartSchema);
export default Cart;
