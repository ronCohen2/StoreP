const initialState = {
  ron: "Df"
};

export default (state = initialState, payload: any) => {
  switch (payload.type) {
    case "typeName":
      return;

    default:
      return state;
  }
};
