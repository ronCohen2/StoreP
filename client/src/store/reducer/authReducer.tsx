import { IAuth } from "../../type/reducer";
import { Reducer } from "redux";

const initialState: IAuth = {
  registerToken: null,
  userConnected: false,
  user: undefined,
  registerErr: undefined,
  loginErr: undefined
};

const reducer: Reducer<IAuth> = (state = initialState, payload: any) => {
  switch (payload.type) {
    case "REGISTER_VERIFICATION":
      return {
        ...state,
        registerToken: payload.payload
      };
    case "REGISTER_ERR":
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

    default:
      return state;
  }
};
export default reducer;
