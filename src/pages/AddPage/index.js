import React from "react";
import PropTypes from "prop-types";
import TaskForm from "../../components/TaskForm";

AddPage.propTypes = {};

function AddPage(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm></TaskForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPage;
