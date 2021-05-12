import { fork} from "redux-saga/effects";
import {watchFetchListTodoAction} from "./task";

function* rootSaga() {
  yield fork(watchFetchListTodoAction);
}


export default rootSaga;
