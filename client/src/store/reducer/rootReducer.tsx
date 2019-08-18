import { combineReducers, Reducer } from "redux";
import cartReducer from "../reducer/cartReducer";
import adminReducer from "../reducer/adminReducer";
import authReducer from "../reducer/authReducer";
import productsReducer from "../reducer/productsReducer";
import { StoreInterface } from "../../type/store";
import Store from "../../Store";

// create store interfce
const rootReducer: Reducer<StoreInterface> = combineReducers<StoreInterface>({
  auth: authReducer,
  cart: cartReducer,
  product: productsReducer,
  admin: adminReducer
});

export default rootReducer;
