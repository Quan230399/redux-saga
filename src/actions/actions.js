import * as type from "../constant/actionType";

export const clearForm = (task) => {
  return {
    type: type.CLEAR_FORM,
    payload: task,
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

// fetch list todo
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

export const fetchListTodofail = (data) => {
  return {
    type: type.FETCH_LIST_TASK_FAIL,
    payload: data,
  };
};

// add task

export const addTask = (task) => {
  return {
    type: type.ADD_TASK,
    payload: task,
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: type.ADD_TASK_SUCCESS,
    payload: data,
  };
};

export const addTaskFail = (err) => {
  return {
    type: type.ADD_TASK_FAIL,
    payload: err,
  };
};

//delete
export const deleteTask = (id) => {
  return {
    type: type.DELETE_TASK,
    payload: id,
  };
};

export const deleteTaskFail = () => {
  return {
    type: type.DELETE_TASK_FAIL,
  };
};

export const deleteTaskSuccess = (data) => {
  return {
    type: type.DELETE_TASK_SUCCES,
    payload: data,
  };
};

// toogle status task

export const toogleStatus = (data) => {
  return {
    type: type.TOGGLE_STATUS_TASK,
    payload: data,
  };
};

export const toogleStatusSuccess = (id) => {
  return {
    type: type.TOGGLE_STATUS_TASK_SUCCESS,
    payload: id,
  };
};

//Update task item

export const updateTask = (task) => {
  return {
    type: type.UPDATE_TASK,
    payload: task,
  };
};



export const updateTaskItem = (task) => {
  return {
    type: type.UPDATE_TASK_ITEM,
    payload: task,
  };
};

export const updateTaskSuccess = (data) => {
  return {
    type: type.UPDATE_TASK_SUCCESS,
    payload: data,
  };
};

export const updateTaskFail = (err) => {
  return {
    type: type.UPDATE_TASK_FAIL,
    payload: err,
  };
};


