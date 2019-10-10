import * as mongoose from "mongoose";
const Schema = mongoose.Schema;
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
});
const contact = mongoose.model("contact", contactSchema);
export default contact;
