import { call, fork, put } from "redux-saga/effects";
import { getListTodo } from "../apis/tasks";
import * as action from "../actions/actions";

function* rootSaga() {
  yield fork(watchFetchListTodo);
}

function* watchFetchListTodo() {
  try {
    const resp = yield call(getListTodo);
    const { status, data } = resp;
    yield put(action.fetchListTodoSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default rootSaga;
