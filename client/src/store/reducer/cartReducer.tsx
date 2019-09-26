import { Reducer } from "redux";
import { Icart } from "../../type/reducer";

const initialState: Icart = {
  cartId: null,
  status: null,
  items: [],
  order: null,
  cartError: null,
  addError: null,
  orderErr: null
};
const cartreducer: Reducer<Icart> = (state = initialState, payload: any) => {
  switch (payload.type) {
    case "CART_ID": {
      return {
        ...state,
        cartId: payload.payload._id,
        status: payload.payload.status
      };
    }
    case "CART_ITEMS":
      return {
        ...state,
        items: state.items.push(payload.payload)
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
    case "DELETE_CART_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item: any) => item.productId !== payload.payload
        )
      };
    case "DELETE_CART_ITEM_ERROR":
      return {
        ...state,
        deleteErr: payload.payload
      };
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        items: []
      };
    case "ORDER":
      return {
        ...state,
        order: payload.payload.Order
      };
    case "ORDER_ERR":
      return {
        ...state,
        orderErr: payload.payload
      };

    default:
      return state;
  }
};
export default cartreducer;
