import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";

export const getCartItems = (cartId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = axios.get("http://localhost:3001/cart/getItems");
      dispatch({ type: "CART_ITEMS", payload: res });
    } catch (error) {
      dispatch({ type: "CART_ERR" });
    }
  };
};
export const addCartItem = (
  cartId: String,
  productId: String,
  quantity: Number
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = axios.post("http://localhost:3001/cart/addItems", {
        cartId,
        productId,
        quantity
      });
      dispatch({ type: "ADD_CART_ITEM", payload: res });
    } catch (error) {
      dispatch({ type: "ADD_CART_ITEM_ERR", payload: error });
    }
  };
};

