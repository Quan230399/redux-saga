import React from "react";
// import PropTypes from "prop-types";
import Search from "./Search";
import Sort from "./Sort";

function Control(props) {
  return (
    <div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Search></Search>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Sort></Sort>
      </div>
    </div>
  );
}

Control.propTypes = {};

export default Control;
