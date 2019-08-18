const initialState = {
  items: [],
  cartError: null,
  addError: null
};
export default (state = initialState, payload: any) => {
  switch (payload.type) {
    case "CART_ITEMS":
      return {
        ...state,
        items: [state.items, ...payload.payload]
      };
    case "CART_ERR":
      return {
        ...state,
        cartError: "Err : error in get data from the server."
      };
    case "ADD_CART_ITEM":
      return {
        ...state,
        items: [state.items, ...payload.payload]
      };
    case "ADD_CART_ITEM_ERR":
      return {
        ...state,
        addError: payload.payload
      };

    default:
      return state;
  }
};
