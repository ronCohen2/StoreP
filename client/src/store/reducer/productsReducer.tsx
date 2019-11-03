import { Iproduct } from "../../type/reducer";
import { Reducer } from "redux";
import { searchProducts } from "../action/productAction";
const initialState: Iproduct = {
  allProducts: null,
  productDetails: null,
  category: null,
  productsByCategory: null,
  search: null,
  err: null,
  moreProduct: "",
  review: []
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
    case "MORE_PRODUCTS":
      return {
        ...state,
        moreProduct: payload.payload
      };
    case "ALL_CATEGORY":
      return {
        ...state,
        category: payload.payload
      };
    case "ADD_REVIEW":
      return {
        ...state,
        review: state.review.concat(payload.payload)
      };
    case "GET_REVIEW":
      return {
        ...state,
        review: payload.payload
      };
    case "REMOVE_PRODUCT_ADMIN":
      const { allProducts } = state;
      return {
        ...state,
        allProducts: allProducts.filter(
          (search: any) => search._id !== payload.payload
        )
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
