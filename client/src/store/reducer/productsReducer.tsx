const initialState = {
  allProducts: null,
  productDetails: null,
  category: null,
  productsByCategory: null,
  search: null
};

export default (state = initialState, payload: any) => {
  switch (payload.type) {
    case "GET_PRODUCTS_USER":
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
    case "GET_PRODUCT_BY_CATEGORY":
      return {
        ...state,
        productsByCategory: payload.payload
      };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        search: payload.payload
      };

    default:
      return state;
  }
};
