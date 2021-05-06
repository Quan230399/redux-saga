import * as type from "../constant/actionType";

var initialState = {
  keySearch: "",
  keySort: "",
};

var myKey = (state = initialState, action) => {
  switch (action.type) {
    case type.SEARCH:
      return { ...state, keySearch: action.payload };
    case type.SORT:
      return { ...state, keySort: action.payload };

    default:
      return { ...state };
  }
};

export default myKey;
