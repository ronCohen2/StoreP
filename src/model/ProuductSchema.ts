import * as mongoose from "mongoose";
import { IProduct } from "./modelInterfece";
const ProductsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    minlength: 2,
    max: 20
  },
  categoryId: {
    type: String,
    required: true
    //FIX- ref to category Schema 
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
const Products = mongoose.model<IProduct>("Products", ProductsSchema);
export default Products;
