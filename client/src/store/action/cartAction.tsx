import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";

export const getCartItems = (cartId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.get("http://localhost:3001/cart/getItems");
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
      const res = await axios.post("http://localhost:3001/cart/addItems", {
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
export const deleteCartItem = (cartId: String, productId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/cart/deleteItem", {
        cartId,
        productId
      });
      dispatch({ type: "DELETE_CART_ITEM", payload: productId });
    } catch (error) {
      dispatch({ type: "DELETE_CART_ITEM_ERROR", payload: error });
    }
  };
};
export const removeCartItems = (cartId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/cart/removeAllItems",
        {
          cartId
        }
      );
      dispatch({ type: "REMOVE_ALL_ITEMS" });
    } catch (error) {
      // dispatch({type:""})
    }
  };
};
export const order = (
  userId: String,
  cartId: String,
  totalPrice: Number,
  city: String,
  street: String,
  shipDate: any,
  creditCard: Number
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/cart/createOrder", {
        userId,
        cartId,
        totalPrice,
        city,
        street,
        shipDate,
        creditCard
      });
      dispatch({ type: "ORDER", payload: res });
    } catch (error) {
      dispatch({ type: "ORDER_ERR", payload: error });
    }
  };
};
