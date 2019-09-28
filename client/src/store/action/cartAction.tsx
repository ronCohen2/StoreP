import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";

export const getCartItems = (cartId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Cart/getItems", {
        cartId
      });
      console.log(res.data);
      dispatch({ type: "CART_ITEMS", payload: res.data });
    } catch (error) {
      dispatch({ type: "CART_ERR" });
    }
  };
};
export const addCartItem = (
  cartId: String,
  productId: String,
  quantity: Number,
  name: String
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Cart/addItem", {
        cartId,
        productId,
        quantity,
        name
      });
      dispatch({ type: "ADD_CART_ITEM", payload: res.data });
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
      dispatch({ type: "ORDER", payload: res.data });
      alert("order success");
    } catch (error) {
      console.log(error);
      dispatch({ type: "ORDER_ERR", payload: error.response.data });
    }
  };
};
export const GetCartStatus = (UserId: String) => {
  console.log("Ssd");
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Cart/cartStatus", {
        UserId
      });
      console.log(res.data);
      await dispatch({ type: "CART_ID", payload: res.data.cart });
      return res.data.cart;
    } catch (error) {
      alert("err");
    }
  };
};
export const checkShipDate = (shipDate: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Cart/checkDate", {
        shipDate
      });
      dispatch({ type: "DATE", payload: res.data.msg });
    } catch (err) {
      dispatch({ type: "DATE", payload: err.response.data.msg });
    }
  };
};
