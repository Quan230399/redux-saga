import * as type from "../constant/actionType";
import findIndex from "../helpers/findIndex";
import slugString from "slug";

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

      if (!newItem.id) {
        if (action.payload.name) {
          if (
            !tasksListSlugs.includes(slugString(action.payload.name.trim()))
          ) {
            newItem.id = randomString.generate(7);
            newItem.name_slug = slugString(action.payload.name.trim());
            tasks = [...tasks, newItem];
            alert("Thêm thành công");
          } else {
            alert("Công việc đã tồn tại");
          }
        } else {
          alert("Bạn chưa nhập tên");
        }
      } else {
        const index = findIndex(tasks, action.payload.id);
        tasks[index] = newItem;
      }
      localStorage.setItem("task", JSON.stringify(tasks));
      return [...tasks];

    // delete task
    case type.DELETE_TASK:
      const check = window.confirm("Bạn muốn xóa ?");
      if (check) {
        const index = findIndex(state, action.payload);
        const newTask = [...state];
        newTask.splice(index, 1);
        tasks=[...newTask];
        localStorage.setItem("task", JSON.stringify(newTask));
      }
      return [...tasks];

    // default
    default:
      return state;
  }
};

export default myReducer;
