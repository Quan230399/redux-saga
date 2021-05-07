import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constant/api";

const url = "todo";

export const getListTodo = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const deleteTaskItem = (id) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${id}`);
};

export const toogleStatusTaskItem = (id, status) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${id}`, status);
};

export const updateTaskItem = (id, data) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${id}`, data);
};

export const addTaskItem = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
