import * as type from "../constant/actionType";
import findIndex from "../helpers/findIndex";
import slugString from "slug";
import { toastSuccess, toastWarning } from "../helpers/toastHelper";

const randomString = require("randomstring");
const data = JSON.parse(localStorage.getItem("task"));

var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
  let tasks = [...state];
  switch (action.type) {
    // add task
    case type.ADD_TASK:
      const tasksListSlugs = tasks.map((task) => slugString(task.name.trim()));
      let newItem = {
        id: action.payload.id,
        name: action.payload.name,
        status: action.payload.status,
        name_slug: "",
      };
      if (newItem.status === "false") {
        newItem.status = false;
      } else {
        newItem.status = true;
      }
      // add task
      if (!newItem.id) {
        if (action.payload.name) {
          if (
            !tasksListSlugs.includes(slugString(action.payload.name.trim()))
          ) {
            newItem.id = randomString.generate(7);
            newItem.name_slug = slugString(action.payload.name.trim());
            tasks = [...tasks, newItem];
            // alert("Thêm thành công");
            toastSuccess("Thêm mới thành công");
          } else {
            // alert("Công việc đã tồn tại");
            toastWarning("Công việc đã tồn tại");
          }
        } else {
          // alert("Bạn chưa nhập tên");
          toastWarning("Bạn chưa nhập tên");
        }
      }
      // update task
      else {
        const index = findIndex(tasks, action.payload.id);
        newItem.name_slug = slugString(action.payload.name.trim());
        tasks[index] = newItem;
        toastSuccess("Chỉnh sửa thành công");
      }
      localStorage.setItem("task", JSON.stringify(tasks));
      return [...tasks];

    // delete task
    case type.DELETE_TASK:
      let check =true;
      if (check) {
        const index = findIndex(state, action.payload);
        const newTask = [...state];
        newTask.splice(index, 1);
        tasks = [...newTask];
        localStorage.setItem("task", JSON.stringify(newTask));
      }
      return [...tasks];

    // toggle status
    case type.TOGGLE_STATUS_TASK:
      const index = findIndex(state, action.payload);
      const newTask = [...state];
      newTask[index] = {
        ...newTask[index],
        status: !newTask[index].status,
      };
      tasks = [...newTask];
      toastSuccess("Đã thay đổi trạng thái");
      localStorage.setItem("task", JSON.stringify(newTask));

      return [...tasks];

    // default
    default:
      return state;
  }
};

export default myReducer;
