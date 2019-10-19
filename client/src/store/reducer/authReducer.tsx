import { IAuth } from "../../type/reducer";
import { Reducer } from "redux";

const initialState: IAuth = {
  userConnected: false,
  user: undefined,
  registerErr: undefined,
  loginErr: undefined,
  step: 0,
  Register_details: undefined,
  id: undefined,
  phone: undefined
};

const reducer: Reducer<IAuth> = (state = initialState, payload: any) => {
  switch (payload.type) {
    case "REGISTER_STEP1":
      return {
        ...state,
        step: 1,
        id: payload.payload.id
      };
    case "REGISTER_STEP2":
      return {
        ...state,
        step: 2,
        phone: payload.payload.phone
      };
    case "REGISTER_STEP1_ERR":
      return {
        ...state,
        registerErr: payload.payload
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        token: payload.payload,
        userConnected: true,
        user: payload.payload.user // fix password
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userConnected: true,
        user: payload.payload.user,
        token: payload.payload.token,
        loginErr: null
      };
    case "LOGIN_ERR": {
      return {
        ...state,
        userConnected: false,
        token: null,
        registerToken: null,
        loginErr: "User or Password WRONG !"
      };
    }
    case "CLEAR_LOGIN_ERR": {
      return {
        ...state,
        loginErr: null
      };
    }

    default:
      return state;
  }
};
export default reducer;
