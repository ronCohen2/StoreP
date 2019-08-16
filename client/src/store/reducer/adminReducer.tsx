import { removeProduct } from "../action/adminAction";

const initialState = {
  allProducts: [],
  productsByCategory: null,
  addProductErr: null,
  removeProductError: null,
  eddCategoryError: null
};

export default (state = initialState, payload: any) => {
  switch (payload.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: payload.payload
      };
    case "GET_PRODUCTS_BY_CATEGORY":
      return {
        ...state,
        productsByCategory: payload.payload
      };
    case "ADD_PRODUCTS":
      return {
        ...state,
        allProducts: state.allProducts.concat(payload.payload)
      };
    case "ADD_PRODUCTS_ERR":
      return {
        ...state,
        addProductErr: payload.payload
      };
    case "REMOVE_PRODUCT_ERR":
      return {
        ...state,
        removeProductError: payload.payload
      };
    case "ADD_CATEGORY_ERR":
      return {
        ...state,
        eddCategoryError: payload.payload
      };
    default:
      return state;
  }
};
