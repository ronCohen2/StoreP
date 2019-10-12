import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
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
      dispatch({
        type: "ADD_PRODUCTS_ERR",
        payload: err.response.data.err
      });
    }
  };
};

//edit product

//remove products
export const removeProduct = (productId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/admin/category/${productId}`
      );
    } catch (err) {
      dispatch({
        type: "REMOVE_PRODUCT_ERR",
        payload: err.response.data
      });
    }
  };
};
// add category
export const addCategory = (categoryName: String, image: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(`http://localhost:3001/admin/category`, {
        categoryName,
        image
      });
      console.log(res.data);
    } catch (err) {
      dispatch({
        type: "ADD_CATEGORY_ERR",
        payload: err.response.data
      });
    }
  };
};
