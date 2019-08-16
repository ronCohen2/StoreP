import { combineReducers } from "redux";
import cartReducer from "../reducer/cartReducer";
import adminReducer from "../reducer/adminReducer";
import authReducer from "../reducer/authReducer";
import productsReducer from "../reducer/productsReducer";

const rootReducer: any = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productsReducer,
  admin: adminReducer
});

export default rootReducer;
