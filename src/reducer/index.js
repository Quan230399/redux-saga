import { combineReducers } from "redux";
import tasks from "./tasks";
import itemUpdate from "./itemUpdate";
import key from "./key";

const myReducers = combineReducers({
  tasks,
  itemUpdate,
  key,
});

export default myReducers;
