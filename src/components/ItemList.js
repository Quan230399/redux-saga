import React from "react";
import PropTypes from "prop-types";
import * as action from "../actions/actions";
import { connect } from "react-redux";

function ItemList(props) {
  const { task, index, onDeleteTask, onUpdateTask } = props;
  const onDelete = () => {
    onDeleteTask(task.id);
  };
  const onUpdate = () => {
    onUpdateTask(task);
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td className="text-center">
        <span
          className={task.status ? "label label-success" : "label label-danger"}
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
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTask: (id) => {
      dispatch(action.deleteTask(id));
    },

    onUpdateTask: (task) => {
      dispatch(action.updateTask(task));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemList);
