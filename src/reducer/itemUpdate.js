import * as type from "../constant/actionType";

var initialState = [];

var itemUpdate = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_TASK:
      return action.payload;
    case type.CLEAR_FORM:
      return action.payload;
    default:
      return state;
  }
};

export default itemUpdate;
