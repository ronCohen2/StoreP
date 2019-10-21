import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";
import swal from "sweetalert";

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
export const UploadImage = (image: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const data = new FormData();
      data.append("file", image);
      const res = await axios.post(
        "http://localhost:3001/Admin/Upload",
        data,
        {}
      );
      dispatch({
        type: "UPLOAD_IMAGE_PRODUCT",
        payload: res.data.filename
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//add products

export const addProduct = (
  productName: String,
  categoryId: String,
  price: Number,
  image: any
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    console.log(productName, categoryId, price, image);
    try {
      const res = await axios.post("http://localhost:3001/admin/", {
        productName,
        categoryId,
        price,
        image
      });
      dispatch({
        type: "ADD_PRODUCTS",
        payload: res.data.newProduct
      });
      swal("Good job!", "You Add New Product!", "success");
    } catch (err) {
      swal("Error!", "Error in add product.", "error");

      dispatch({
        type: "ADD_PRODUCTS_ERR",
        payload: err.response.data.err
      });
    }
  };
};

//edit product
export const editProduct = (id: String, obj: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(`http://localhost:3001/admin/edit`, {
        id,
        obj
      });
      swal("Good job!", "You Edit this Product!", "success");
    } catch (err) {
      console.log("err in edit ");
    }
  };
};
//remove products
export const removeProduct = (productId: String) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/admin/removeProduct/${productId}`
      );
      dispatch({ type: "REMOVE_PRODUCT_ADMIN", payload: productId });
    } catch (err) {
      dispatch({
        type: "REMOVE_PRODUCT_ERR"
        // payload: err.response.data.msg
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
      swal("Good job!", "You Add New Category!", "success");
    } catch (err) {
      dispatch({
        type: "ADD_CATEGORY_ERR",
        payload: err.response.data
      });
      swal("Error!", "Error in add Category.", "error");
    }
  };
};
