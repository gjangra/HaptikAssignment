const initialState = "";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "modifySearch":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default searchReducer;
