import * as type from "../constant/actionType";

export const listAll = () => {
  return {
    type: type.LIST_ALL,
  };
};

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

