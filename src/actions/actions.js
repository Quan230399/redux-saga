import * as type from "../constant/actionType";


export const addTask = (task) => {
  return {
    type: type.ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: type.DELETE_TASK,
    payload: id,
  };
};

export const updateTask = (task) => {
  return {
    type: type.UPDATE_TASK,
    payload: task,
  };
};

export const clearForm = (task) => {
  return {
    type: type.CLEAR_FORM,
    payload: task,
  };
};

export const toogleStatus = (id) => {
  return {
    type: type.TOGGLE_STATUS_TASK,
    payload: id,
  };
};

export const search = (key) => {
  return {
    type: type.SEARCH,
    payload: key,
  };
};

export const sort = (keySort) => {
  return {
    type: type.SORT,
    payload: keySort,
  };
};

export const clearToast = () => {
  return {
    type: type.CLEAR_TOAST,
  };
};

//login

export const login = (data) => {
  return {};
};

// saga

export const fetchListTodo = () => {
  return {
    type: type.FETCH_LIST_TASK,
  };
};

export const fetchListTodoSuccess = (data) => {
  return {
    type: type.FETCH_LIST_TASK_SUCCESS,
    payload: data,
  };
};
