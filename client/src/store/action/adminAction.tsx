import { response } from "express";
import { any } from "prop-types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

//get All Products
//get all prodocut by category
//add products
//edit product
//remove products
// add category

export const getAllProducts = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch("http://localhdost:3001/Cart/GetCart");
      const data = await res.json();
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch {
      alert("error ");
    }
  };
};
//get all prodocut by category
export const getAllProductsByCategory = (category: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch("http://localhdost:3001/Cart/GetCart");
      const data = await res.json();
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch {
      alert("error ");
    }
  };
};
//add products
//edit product
//remove products
// add category
