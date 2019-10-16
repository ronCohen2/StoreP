import { Iproduct } from "../../type/reducer";
import { Reducer } from "redux";
import { searchProducts } from "../action/productAction";
const initialState: Iproduct = {
  allProducts: null,
  productDetails: null,
  category: null,
  productsByCategory: null,
  search: null,
  err: null
};

const reducer: Reducer<Iproduct> = (state = initialState, payload: any) => {
  switch (payload.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: payload.payload
      };
    case "GET_PRODUCTS_CATEGORY":
      return {
        ...state,
        allProducts: payload.payload
      };
    case "GET_PRODUCTS_DETAILS":
      return {
        ...state,
        productDetails: payload.payload
      };
    case "ALL_CATEGORY":
      return {
        ...state,
        category: payload.payload
      };

    case "REMOVE_PRODUCT_ADMIN":
      const { search } = state;
      return {
        ...state,
        search: search.filter((search: any) => search._id !== payload.payload)
      };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        search: payload.payload
      };
    case "SEARCH_ERR":
      return {
        ...state,
        search: null
      };

    default:
      return state;
  }
};
export default reducer;
