import * as mongoose from "mongoose";
import { IContact } from "./modelInterfece";
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
const Contact = mongoose.model<IContact>("Contact", contactSchema);
export default Contact;
