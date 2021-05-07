import {
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  getListTodo,
  deleteTaskItem,
  toogleStatusTaskItem,
  updateTaskItem,
} from "../apis/tasks";
import * as action from "../actions/actions";
import * as type from "../constant/actionType";

export function* watchFetchListTodoAction() {
  yield fork(watchFetchListTodo);
  //   yield takeEvery(type.FETCH_LIST_TASK, watchFetchListTodo);
  yield takeLatest(type.DELETE_TASK, watchDeleteTask);
  yield takeEvery(type.TOGGLE_STATUS_TASK, watchToogleStatus);
  yield takeEvery(type.UPDATE_TASK_ITEM, watchUpdateTask);
}

function* watchFetchListTodo() {
  try {
    const resp = yield call(getListTodo);
    const { status, data } = resp;
    if (status === type.STATUS_CODE.SUCCESS) {
      yield put(action.fetchListTodoSuccess(data));
    } else {
      yield put(action.fetchListTodofail(data));
    }
  } catch (error) {
    yield put(action.fetchListTodofail(error));
  }
}

function* watchDeleteTask({ payload }) {
  try {
    const id = payload;
    yield call(deleteTaskItem, id);
    yield put(action.deleteTaskSuccess(id));
    yield call(watchFetchListTodo);
  } catch (error) {
    yield put(action.deleteTaskFail(error));
  }
}

function* watchToogleStatus({ payload }) {
  const { id, status } = payload;
  yield call(toogleStatusTaskItem, id, { ...payload, status: !status });
  yield put(action.toogleStatusSuccess(id));
  yield call(watchFetchListTodo);
}

function* watchUpdateTask({ payload }) {
  const { id } = payload;
  yield call(updateTaskItem, id, {...payload});
  yield call(watchFetchListTodo);
}
