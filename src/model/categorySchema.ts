import * as mongoose from "mongoose";
import { ICategory } from "./modelInterfece";
const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
const category = mongoose.model<ICategory>("Category", categorySchema);
export default category;
