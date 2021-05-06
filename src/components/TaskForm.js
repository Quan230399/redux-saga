import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as action from "../actions/actions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function TaskForm(props) {
  const { taskItem, onAddTask, status } = props;
  const history = useHistory();
  const [valueForm, setValueForm] = useState({
    id: "",
    name: "",
    status: true,
  });

  useEffect(() => {
   if(status==="succes") history.push("/");
  },[status]);

  useEffect(() => {
    setValueForm(taskItem);
  }, [taskItem]);

  const onchange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    setValueForm({
      ...valueForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onAddTask(valueForm);
    setValueForm({
      id: "",
      name: "",
      status: true,
    });
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title text-center">
          {!valueForm.id ? "Thêm công viêc" : "Chỉnh sửa công việc"}
        </h3>
      </div>
      <div className="panel-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="blogs_name">Tên</label>
            <input
              type="text"
              className="form-control"
              id=""
              name="name"
              placeholder="Nhập tên công việc"
              value={valueForm.name}
              onChange={onchange}
            />
          </div>
          <label htmlFor="blogs_name">Trạng thái</label>
          <select
            className="form-control"
            required="required"
            name="status"
            value={valueForm.status}
            onChange={onchange}
          >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>

          <div className="text-center mt-15">
            <button type="submit" className="btn btn-warning ">
              {!valueForm.id ? "Thêm" : "Lưu"}
            </button>
            &nbsp;
            <Link to="/">
              <button
                type="button"
                className="btn btn-danger"
              >
                Hủy Bỏ
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

TaskForm.propTypes = {
  onClose: PropTypes.func,
};

TaskForm.defaultProps = {
  onClose: null,
};

const mapStateToProps = (state) => {
  return {
    taskItem: state.itemUpdate,
    status: state.tasks.toast.status,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(action.addTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
