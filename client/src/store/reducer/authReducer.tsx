const initialState :any= {
  ron: "r",
  cohemn: "rer"
};

export default (state = initialState, payload: any) => {
  switch (payload.type) {
    case "typeName":
      return { ...state, ...payload };

    default:
      return state;
  }
};
