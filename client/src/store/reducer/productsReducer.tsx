const initialState = {};

export default (state = initialState, payload: any) => {
  switch (payload.type) {
    case "typeName":
      return { ...state, ...payload };

    default:
      return state;
  }
};
 