import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";
import swal from "sweetalert";
import Cookies from "js-cookie";
import { Logout } from "./authAction";

export const getCartItems = (cartId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/Cart/getItems",
        {
          cartId
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      console.log(res.data);
      dispatch({ type: "CART_ITEMS", payload: res.data });
      dispatch({ type: "CALCULATE_TOTAL_PRICE", payload: res.data });
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
      const res = await axios.post(
        "http://localhost:3001/Cart/addItem",
        {
          cartId,
          productId,
          quantity,
          name
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );

      if (res.data.update) {
        dispatch({
          type: "UPDATE_ QUANTITY",
          payload: res.data.UpdateQuantity
        });
      } else {
        dispatch({ type: "ADD_CART_ITEM", payload: res.data });
      }

      dispatch({ type: "CALCULATE_TOTAL_PRICE", payload: res.data });
      swal("Good job!", " Product add to cart !", "success");
    } catch (error) {
      const { status } = error.response.data;
      if (status == 403) {
        swal("Please SignIn");
        dispatch(Logout());
      }
      swal("Error!", "error in add product to cart!", "error");
      dispatch({ type: "ADD_CART_ITEM_ERR", payload: error });
    }
  };
};
export const deleteCartItem = (cartId: String, productId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/cart/deleteItem",
        {
          cartId,
          productId
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      dispatch({ type: "DELETE_CART_ITEM", payload: productId });
      dispatch({ type: "CALCULATE_TOTAL_PRICE", payload: res.data });
    } catch (error) {
      const { status } = error.response.data;
      if (status == 403) {
        swal("Please SignIn");
        dispatch(Logout());
      }
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
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      dispatch({ type: "REMOVE_ALL_ITEMS" });
      dispatch({ type: "CALCULATE_TOTAL_PRICE", payload: res.data });
    } catch (error) {
      const { status } = error.response.data;
      if (status == 403) {
        swal("Please SignIn");
        dispatch(Logout());
      }
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
  creditCard: Number,
  toHomePage: any
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/cart/createOrder",
        {
          userId,
          cartId,
          totalPrice,
          city,
          street,
          shipDate,
          creditCard
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      dispatch({ type: "ORDER", payload: res.data });
      dispatch({ type: "CLEAN_ORDER_ERR", payload: res.data });
      dispatch(GetCartStatus(userId));
      swal("Good job!", " Order Success!", "success");

      toHomePage();
    } catch (error) {
      const { status } = error.response.data;
      if (status == 403) {
        swal("Please SignIn");
        dispatch(Logout());
      }
      dispatch({ type: "ORDER_ERR", payload: error.response.data });
    }
  };
};
export const GetCartStatus = (UserId: String) => {
  console.log("Ssd");
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/Cart/cartStatus",
        {
          UserId
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      console.log(res.data);
      await dispatch({ type: "CART_ID", payload: res.data.cart });
      return res.data.cart;
    } catch (error) {
      const { status } = error.response.data;
      if (status == 403) {
        swal("Please SignIn");
        dispatch(Logout());
      }
    }
  };
};
export const checkShipDate = (shipDate: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/Cart/checkDate",
        {
          shipDate
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      dispatch({ type: "DATE", payload: res.data.msg });
    } catch (err) {
      const { status } = err.response.data;
      if (status == 403) {
        swal("Please SignIn");
        dispatch(Logout());
      }
      dispatch({ type: "DATE", payload: err.response.data.msg });
    }
  };
};
