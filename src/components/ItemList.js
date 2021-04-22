import React from "react";
import PropTypes from "prop-types";
import * as action from "../actions/actions";
import { connect } from "react-redux";
import { confirmA } from "../helpers/confirmAlert";
function ItemList(props) {
  const {
    task,
    index,
    onDeleteTask,
    onUpdateTask,
    onToggletatus,
    onOpen,
  } = props;

  const onDelete = () => {
    confirmA("Xác nhận","Bạn có chắc muốn xóa ?",()=>onDeleteTask(task.id));
    
  };

  const onUpdate = () => {
    if (!onOpen) return;
    onUpdateTask(task);
    onOpen();
  };

  const toggleStatus = () => {
    onToggletatus(task.id);
  };

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{task.name}</td>
      <td className="text-center">
        <span
          className={task.status ? "label label-success" : "label label-danger"}
          onClick={toggleStatus}
        >
          {task.status ? "Kích hoạt" : "Ẩn"}
        </span>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-warning mr-5"
          onClick={onUpdate}
        >
          <span className="fa fa-pencil mr-5" /> Sửa
        </button>
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          <span className="fa fa-trash mr-5" /> Xóa
        </button>
      </td>
    </tr>
  );
}

ItemList.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  onOpen: PropTypes.func,
};

ItemList.defaultProps = {
  onOpen: null,
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTask: (id) => {
      dispatch(action.deleteTask(id));
    },

    onUpdateTask: (task) => {
      dispatch(action.updateTask(task));
    },

    onToggletatus: (id) => {
      dispatch(action.toogleStatus(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemList);
