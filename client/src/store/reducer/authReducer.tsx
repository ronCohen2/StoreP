const initialState: any = {
  registerErr: null,
  registerToken: null,
  userConnected: false,
  user: null
};

export default (state = initialState, payload: any) => {
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

    default:
      return state;
  }
};
