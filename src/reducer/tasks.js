import * as type from "../constant/actionType";
import { toastSuccess, toastWarning } from "../helpers/toastHelper";

var initialState = {
  todo: [],
  toast: {
    status: "",
  },
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch list task
    case type.FETCH_LIST_TASK: {
      return {
        ...state,
      };
    }

    case type.FETCH_LIST_TASK_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        todo: data,
      };
    }

    case type.FETCH_LIST_TASK_FAIL: {
      const data = action.payload;
      toastWarning(data);
      return {
        ...state,
      };
    }

    // add task

    case type.ADD_TASK: {
      return { ...state };
    }

    case type.ADD_TASK_SUCCESS: {
      toastSuccess("Thêm công việc thành công");
      return {
        ...state,
        toast: {
          status: "success",
        },
      };
    }

    case type.ADD_TASK_FAIL: {
      toastWarning("Thêm công việc thất bại !");
      return { ...state };
    }

    // delete task
    case type.DELETE_TASK: {
      return { ...state };
    }

    case type.DELETE_TASK_SUCCES: {
      toastSuccess(`Đã xóa ${action.payload}`);
      return {
        ...state,
        toast: {
          status: "success",
        },
      };
    }

    case type.DELETE_TASK_FAIL: {
      toastWarning("Xóa không thành công !");
      return {
        ...state,
        toast: {
          status: "error",
        },
      };
    }

    // update task

    case type.UPDATE_TASK_SUCCESS: {
      toastSuccess("Cập nhập thành công");
      return {
        ...state,
        toast: {
          status: "success",
        },
      };
    }

    case type.UPDATE_TASK_FAIL: {
      toastWarning("Cập nhập thất bại !");
      return {
        ...state,
        toast: {
          status: "error",
        },
      };
    }

    // toggle status
    case type.TOGGLE_STATUS_TASK: {
      return { ...state };
    }

    case type.TOGGLE_STATUS_TASK_SUCCESS: {
      toastSuccess(`Đã thay đổi trạng thái ${action.payload}`);
      return {
        ...state,
        toast: {
          status: "success",
        },
      };
    }

    case type.CLEAR_TOAST:
      return {
        ...state,
        toast: {
          status: "",
        },
      };

    // search task list
    case type.SEARCH: {
      return { ...state };
    }

    case type.SEARCH_SUCCESS: {
      return { ...state, todo: action.payload };
    }

    // sort
    case type.SORT: {
      const key = action.payload;
      let data = [...state.todo];

      const taskSort = data.sort((x, y) => {
        if (key === "ẩn") return x.status - y.status;
        if (key === "kích hoạt") return y.status - x.status;
        if (key === "a-z") return x.name.localeCompare(y.name);
        if (key === "z-a") return y.name.localeCompare(x.name);
        return 0;
      });

      return {
        ...state,
        todo: taskSort,
      };
    }

    default:
      return { ...state };
  }
};

export default myReducer;
