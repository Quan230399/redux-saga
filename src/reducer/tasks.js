import * as type from "../constant/actionType";
import slugString from "slug";
import { toastSuccess, toastWarning } from "../helpers/toastHelper";

const randomString = require("randomstring");

var initialState = {
  todo: [],
  toast: {
    status: "",
    title: "",
  },
};

var myReducer = (state = initialState, action) => {
  let tasks = { ...state };
  let newTask;
  switch (action.type) {
    //saga
    case type.FETCH_LIST_TASK:
      return {
        ...state,
      };

    case type.FETCH_LIST_TASK_SUCCESS:
      const data = action.payload;
      return {
        ...state,
        todo: data,
      };
    // add task
    case type.ADD_TASK:
      const tasksListSlugs = tasks.todo.map((task) =>
        slugString(task.name.trim())
      );
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
            tasks = {
              ...tasks,
              todo: [...tasks.todo, newItem],
              toast: { status: "succes", title: "Thêm mới thành công" },
            };
            // alert("Thêm thành công");
            toastSuccess("Thêm mới thành công");
          } else {
            // alert("Công việc đã tồn tại");
            tasks = {
              ...tasks,
              toast: { status: "error", title: "Công việc đã tồn tại" },
            };
            toastWarning(tasks.toast.title);
          }
        } else {
          // alert("Bạn chưa nhập tên");
          tasks = {
            ...tasks,
            toast: { status: "error", title: "Bạn chưa nhập tên" },
          };
          toastWarning(tasks.toast.title);
        }
      }
      // update task
      else {
        newItem.name_slug = slugString(action.payload.name.trim());
        newTask = tasks.todo.map((task) => {
          return task.id === newItem.id ? newItem : task;
        });
        tasks = {
          ...tasks,
          todo: [...newTask],
          toast: { status: "succes", title: "Chỉnh sửa thành công" },
        };
        toastSuccess(tasks.toast.title);
      }
      return { ...tasks };

    // delete task
    case type.DELETE_TASK:
      newTask = tasks.todo.filter((task) => {
        return task.id !== action.payload;
      });
      tasks = { ...tasks, todo: [...newTask] };
      return { ...tasks };

    // toggle status
    case type.TOGGLE_STATUS_TASK:
      newTask = tasks.todo.map((task) => {
        return task.id === action.payload
          ? { ...task, status: !task.status }
          : task;
      });
      tasks = { ...tasks, todo: [...newTask] };
      toastSuccess("Đã thay đổi trạng thái");

      return { ...tasks };

    case type.CLEAR_TOAST:
      return {
        ...tasks,
        toast: {
          status: "",
          title: "",
        },
      };

    // case type.SEARCH:
    //   newTask = JSON.parse(localStorage.getItem("task"));
    //   const tasksSearch = newTask.filter((task) =>
    //     task.name_slug.includes(slugString(action.payload))
    //   );
    //   return tasksSearch;

    // default
    default:
      return { ...tasks };
  }
};

export default myReducer;
