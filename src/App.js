/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "./App.css";
import Control from "./components/Control";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import * as action from "./actions/actions";
import { connect } from "react-redux";
import slugString from "slug";

function App(props) {
  const [key, setKey] = useState("");
  const [toggleForm, setToggleForm] = useState(false);
  const [keySort, setkeySort] = useState("");
  const { onClearForm } = props;

  const onCloseFrom = () => {
    setToggleForm(false);
    onClearForm({
      id: "",
      name: "",
      status: true,
    });
  };

  const onOpenForm = () => {
    setToggleForm(true);
  };

  const onToggleForm = () => {
    setToggleForm(!toggleForm);
    onClearForm({
      id: "",
      name: "",
      status: true,
    });
  };

  const onSearch = (key) => {
    setKey(slugString(key));
  };

  const onSort = (key) => {
    setkeySort(key);
  };

  const form = (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <TaskForm onClose={onCloseFrom}></TaskForm>
    </div>
  );

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          {toggleForm ? form : ""}
          <div
            className={
              !toggleForm
                ? "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                : "col-xs-8 col-sm-8 col-md-8 col-lg-8"
            }
          >
            <button
              type="button"
              className="btn btn-primary mr-5"
              onClick={onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <div className="row mt-15">
              <Control onSearch={onSearch} onSort={onSort}></Control>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  onOpen={onOpenForm}
                  keySearch={key}
                  keySort={keySort}
                ></TaskList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClearForm: (task) => {
      dispatch(action.clearForm(task));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
