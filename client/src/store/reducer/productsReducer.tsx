const initialState = {
  allProducts: null,
  productDetails: null,
  category: null,
  productsByCategory: null,
  search: null,
  err: null
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
    case "PRODUCT_ERR":
      return {
        ...state,
        err: "Err :error  in get data from server ."
      };

    default:
      return state;
  }
};
