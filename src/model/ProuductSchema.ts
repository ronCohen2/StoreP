import * as mongoose from "mongoose";
import { IProduct } from "./modelInterfece";
const Schema = mongoose.Schema;

const reviewsSchema = new mongoose.Schema({
  data: {
    type: Date,
    default: Date.now()
  },
  stars: {
    type: Number,
    min: 0,
    max: 5
    // required: true
  },
  content: {
    type: String,
    maxlength: 200,
    required: true
  },
  user: {
    type: String,
    required: true
  }
});
export const Review = mongoose.model<any>("Review", reviewsSchema);

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
    _id: Schema.Types.ObjectId,
    type: String,
    required: true
  },
  review: {
    type: [reviewsSchema]
  }
});
const Products = mongoose.model<IProduct>("Products", ProductsSchema);
export default Products;
