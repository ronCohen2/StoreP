import { response } from "express";
import { any } from "prop-types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { clearLine } from "readline";
import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch("http://localhost:3001/admin");
      const data = await res.json();
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch {
      alert("error ");
    }
  };
};
//get all prodocut by category
export const getAllProductsByCategory = (categoryId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(
        "http://localhost:3001/admin/ProductsByCategory",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ categoryId })
        }
      );
      const data = await res.json();
      dispatch({ type: "GET_PRODUCTS_BY_CATEGORY", payload: data });
    } catch {
      alert("error ");
    }
  };
};
//add products

export const addProduct = (
  productName: String,
  categoryId: String,
  price: Number,
  image: String
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post("http://localhost:3001/admin/", {
        productName,
        categoryId,
        price,
        image
      });
      await dispatch({
        type: "ADD_PRODUCTS",
        payload: res.data.newProduct
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "ADD_PRODUCTS_ERR",
        payload: err.response.data.err.errors
      });
    }
  };
};

//edit product

//remove products
// add category
