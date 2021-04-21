import { combineReducers } from "redux";
import tasks from "./tasks";
import itemUpdate from "./itemUpdate";

const myReducers = combineReducers({
  tasks,
  itemUpdate,
});

export default myReducers;
