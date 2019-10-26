import * as mongoose from "mongoose";
// import ProductSchema from "./ProuductSchema";
import { IcartItem } from "./modelInterfece";
const Schema = mongoose.Schema;

const cartItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  product: {
    type: Schema.Types.ObjectId,
    // ref: ProductSchema,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  totalPrice: {
    type: Number,
    required: true
  },
  cartId: {
    type: String,
    required: true
  }
});
const CartItem = mongoose.model<IcartItem>("CartItem", cartItemSchema);
export default CartItem;
