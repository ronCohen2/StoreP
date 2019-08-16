const initialState = {
  products: null
};

export default (state = initialState, payload: any) => {
  switch (payload.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload.payload
      };

    default:
      return state;
  }
};
