import React from "react";
// import PropTypes from "prop-types";
import ItemList from "./ItemList";
import { connect } from "react-redux";

function TaskList(props) {
  const { tasks } = props;
  const elements = tasks.map((task, index) => {
    return <ItemList task={task} index={index} key={task.id}></ItemList>;
  });
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr className="text-center">
          <th>STT</th>
          <th>Tên</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, null)(TaskList);
