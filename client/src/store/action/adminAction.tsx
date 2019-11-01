import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";
import swal from "sweetalert";
import Cookies from "js-cookie";
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
      const res = await axios.post("http://localhost:3001/Admin/Upload", data, {
        headers: {
          token: Cookies.get("Token")
        }
      });
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
      const res = await axios.post(
        "http://localhost:3001/admin/",
        {
          productName,
          categoryId,
          price,
          image
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
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
      const res = await axios.post(
        `http://localhost:3001/admin/edit`,
        {
          id,
          obj
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
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
        `http://localhost:3001/admin/removeProduct/${productId}`,
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
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
      const res = await axios.post(
        `http://localhost:3001/admin/category`,
        {
          categoryName,
          image
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
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

export const getOpenUserContactMessage = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/Admin/OpenUserMessage/`,
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      dispatch({
        type: "CONTACT_MESSAGE",
        payload: res.data
      });
    } catch (err) {}
  };
};
export const SendEmailMessage = (mail: String, subject: any, text: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/Admin/SendMail`,
        {
          mail,
          subject,
          text
        },
        {
          headers: {
            token: Cookies.get("Token")
          }
        }
      );
      dispatch({
        type: "EMAIL_ADMIN_SUCCESS",
        payload: true
      });
    } catch (err) {
      dispatch({
        type: "EMAIL_ADMIN_SUCCESS",
        payload: false
      });
    }
  };
};
