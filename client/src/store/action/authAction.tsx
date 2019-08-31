import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";
import { GetCartStatus } from "./cartAction";
import { promised } from "q";
import { promises } from "fs";

export const registerVerif = (
  ID: Number,
  email: String,
  password: String | Number,
  password2: String | Number
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const res = await axios.post(
      "http://localhost:3001/Auth/registerverification",
      {
        ID,
        email,
        password,
        password2
      }
    );
    if (!res.data.seccess) {
      return dispatch({ type: "REGISTER_ERR", payload: res.data.Error });
    }
    console.log("sd");
    dispatch({ type: "REGISTER_VERIFICATION", payload: res.data.token });
  };
};
export const register = (
  token: String,
  city: String,
  street: String,
  fname: String,
  lname: String
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/Auth/register", {
        token,
        city,
        street,
        fname,
        lname
      });
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.token });
    } catch (error) {
      dispatch({ type: "REGISTER_ERR", payload: error.data });
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
      // console.log(res.data.user._id);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      
    } catch (err) {
      dispatch({ type: "LOGIN_ERR" });
    }
  };
};

// create log out action
