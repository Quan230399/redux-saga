import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constant/api";

const url = "todo";

export const getListTodo = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
