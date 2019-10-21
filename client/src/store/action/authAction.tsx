import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";
import { GetCartStatus, getCartItems } from "./cartAction";
import swal from "sweetalert";

export const Rstep1 = (
  userId: Number,
  email: String,
  password: String | Number,
  confirmPassword: String | Number
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Auth/registerStep1", {
        userId,
        email,
        password,
        confirmPassword
      });
      const obj = { userId, password, id: res.data.id };
      await dispatch({ type: "REGISTER_STEP1", payload: obj });
    } catch (err) {
      await dispatch({
        type: "REGISTER_STEP1_ERR",
        payload: err.response.data
      });
    }
  };
};
export const Rstep2 = (
  city: String,
  street: String,
  fname: String,
  lname: String,
  phone: Number,
  id: String
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Auth/RegisterStep2", {
        city,
        street,
        fname,
        lname,
        phone,
        id
      });
      dispatch({ type: "REGISTER_STEP2", payload: phone });
    } catch (error) {
      dispatch({ type: "REGISTER_ERR", payload: error.data });
    }
  };
};
export const Rstep3 = (phone: Number) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Auth/registerStep3", {
        phone
      });
      dispatch({ type: "REGISTER_STEP3", payload: res.data.id });
    } catch (err) {
      dispatch({ type: "REGISTER_ERR", payload: err.data });
    }
  };
};
export const CheckCode = (
  verifyRequestId: String,
  code: Number,
  userId: Number,
  password: String,
  toHomePage: any
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Auth/CheckCode", {
        verifyRequestId,
        code
      });
      dispatch({ type: "REGISTER_STEP4" });
      swal("Welcome!", "Success Register!", "success");
      dispatch(login(userId, password));
      toHomePage();
    } catch (err) {
      dispatch({ type: "REGISTER_ERR", payload: err.data });
      swal("Error!", `${err.response.data}`, "error");
    }
  };
};

export const login = (id: Number, password: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Auth/login", {
        id,
        password
      });

      await dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      const cart = await dispatch(GetCartStatus(res.data.user._id));
      console.log(cart);
      await dispatch(getCartItems(cart._id));
    } catch (err) {
      dispatch({ type: "LOGIN_ERR", payload: err.data });
    }
  };
};

// create log out action
