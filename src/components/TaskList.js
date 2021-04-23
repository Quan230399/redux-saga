import React from "react";
import PropTypes from "prop-types";
import ItemList from "./ItemList";
import { connect } from "react-redux";

function TaskList(props) {
  const { tasks, onOpen } = props;

  // const taskSort = tasks.sort((x, y) => {
  //   if (keySort === "ẩn") return x.status - y.status;
  //   if (keySort === "kích hoạt") return y.status - x.status;
  //   if (keySort === "a-z") return x.name.localeCompare(y.name);
  //   if (keySort === "z-a") return y.name.localeCompare(x.name);
  //   return 0;
  // });

  // const tasksSearch = taskSort.filter((task) => task.name_slug.includes(keySearch));

  const elements = tasks.map((task, index) => {
    return (
      <ItemList
        task={task}
        index={index}
        key={task.id}
        onOpen={onOpen}
      ></ItemList>
    );
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

TaskList.propTypes = {
  onOpen: PropTypes.func,
  keySearch: PropTypes.string.isRequired,
  keySort: PropTypes.string.isRequired,
};

TaskList.defaultProps = {
  onOpen: null,
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, null)(TaskList);
