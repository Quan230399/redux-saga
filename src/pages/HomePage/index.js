import React from "react";
// import PropTypes from "prop-types";
import Control from "../../components/Control";
import TaskList from "../../components/TaskList";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../actions/actions";

HomePages.propTypes = {};

function HomePages(props) {
  const { onClearForm, onClearToast } = props;
  const onAdd = () => {
    onClearToast();
    onClearForm({ id: "", name: "", status: true, name_slug:"" });
  };
  return (
    <div>
    <Header></Header>
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <Link to="/add">
              <button
                type="button"
                className="btn btn-primary mr-5"
                onClick={onAdd}
              >
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
            </Link>
            <div className="row mt-15">
              <Control></Control>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList></TaskList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearForm: (task) => {
      dispatch(action.clearForm(task));
    },
    onClearToast: () => {
      dispatch(action.clearToast());
    },
  };
};

export default connect(null, mapDispatchToProps)(HomePages);
