import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";
import swal from "sweetalert";
import Cookies from "js-cookie";

//All products
export const getAllProducts = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.get("http://localhost:3001/Products");
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (err) {
      dispatch({ type: "PRODUCT_ERR" });
    }
  };
};
//Get products by category
export const getProductsByCategory = (categoryId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/Products/category/${categoryId}`
      );
      dispatch({ type: "GET_PRODUCTS_CATEGORY", payload: res.data.products });
    } catch (err) {
      dispatch({ type: "PRODUCT_ERR" });
    }
  };
};
//get product details

export const getProductsDetails = (productId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/Products/productDetails/${productId}`
      );
      dispatch({ type: "GET_PRODUCTS_DETAILS", payload: res.data });
    } catch (err) {
      dispatch({ type: "PRODUCT_ERR" });
    }
  };
};
//All category
export const getAllCategory = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.get(`http://localhost:3001/Products/allCategory`);
      dispatch({ type: "ALL_CATEGORY", payload: res.data });
    } catch (err) {
      dispatch({ type: "PRODUCT_ERR" });
    }
  };
};

//search product
export const searchProducts = (product: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/Products/search/${product}`
      );
      dispatch({ type: "SEARCH_PRODUCT", payload: res.data });
    } catch (err) {
      dispatch({ type: "SEARCH_ERR" });
    }
  };
};

export const newContact = (
  name: String,
  email: String,
  text: String,
  toHomePage: any
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(`http://localhost:3001/Products/contact`, {
        name,
        email,
        text
      });
      swal("TNX!", " Request accepted", "success");
      toHomePage();
    } catch (err) {
      dispatch({ type: "SEARCH_ERR" });
    }
  };
};
export const getMoreProduct = (id: String, ProductId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/Products/MoreProduct/`,
        {
          id,
          ProductId
        }
      );
      dispatch({ type: "MORE_PRODUCTS", payload: res.data });
    } catch (err) {}
  };
};
export const AddReview = (
  stars: Number,
  content: String,
  user: String,
  productId: String
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/Products/AddReview",
        {
          stars,
          content,
          user,
          productId
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      swal("TNX", "Review Accepted", "success");
      dispatch({ type: "ADD_REVIEW", payload: res.data });
    } catch (error) {
      swal("Sorry", "Error in Add New Review ", "error");
    }
  };
};

export const getProductReview = (productId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/Products/getProductReview",
        {
          productId
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      console.log(res.data);
      dispatch({ type: "GET_REVIEW", payload: res.data });
    } catch (error) {
      // dispatch({ type: "CART_ERR" });
    }
  };
};
