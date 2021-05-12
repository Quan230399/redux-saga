import React from "react";
import * as action from "../actions/actions";
import ItemList from "./ItemList";
import { connect } from "react-redux";

function TaskList(props) {
  const { tasks } = props;
  console.log(tasks);

  const elements = tasks.map((task, index) => {
    return <ItemList task={task} index={index} key={task.id}></ItemList>;
  });

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Công việc</th>
          <th className="text-center">Trạng thái</th>
          <th className="text-center">Hành động</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchListTodo: () => {
      dispatch(action.fetchListTodo);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
