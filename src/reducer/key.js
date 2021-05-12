import * as type from "../constant/actionType";

var initialState = {
  keySearch: "",
  keySort: "",
};

var myKey = (state = initialState, action) => {
  switch (action.type) {


    default:
      return { ...state };
  }
};

export default myKey;
