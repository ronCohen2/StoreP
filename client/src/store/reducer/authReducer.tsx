import { IAuth } from "../../type/reducer";
import { Reducer } from "redux";

const initialState = {
  userConnected: false,
  user: undefined,
  registerErr: undefined,
  loginErr: undefined,
  step: 0,
  Register_details: undefined,
  id: "",
  phone: "",
  userId: "",
  password: "",
  Verid: "",
  Role: false
};

const reducer: Reducer = (state = initialState, payload: any) => {
  switch (payload.type) {
    case "REGISTER_STEP1":
      return {
        ...state,
        step: 1,
        id: payload.payload.id,
        userId: payload.payload.userId,
        password: payload.payload.password
      };
    case "REGISTER_STEP2":
      return {
        ...state,
        step: 2,
        phone: payload.payload
      };
    case "REGISTER_STEP3":
      return {
        ...state,
        Verid: payload.payload
      };
    case "REGISTER_STEP3":
      return {
        ...state
      };
    case "REGISTER_STEP4":
      return {
        ...state,

        // phone: "",
        // // id: "",
        step: 3
      };
    case "SET_STATUS": {
      return {
        ...state,
        step: payload.payload.status,
        id: payload.payload.user._id
      };
    }
    case "ADD_PHONE_NUMBER":
      return {
        ...state,
        phone: payload.payload.phone,
        id: payload.payload.id
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
      console.log(payload);
      return {
        ...state,
        userConnected: true,
        user: payload.payload.user,
        loginErr: null,
        step: payload.payload.status,
        Role: payload.payload.user.role
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
    case "LOG_OUT": {
      return {
        userConnected: false,
        user: undefined,
        registerErr: undefined,
        loginErr: undefined,
        step: 0,
        Register_details: undefined,
        id: "",
        phone: "",
        userId: "",
        password: "",
        Verid: ""
      };
    }

    default:
      return state;
  }
};
export default reducer;
