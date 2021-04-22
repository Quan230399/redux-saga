import React from "react";
import Search from "./Search";
import Sort from "./Sort";
import PropTypes from "prop-types";

function Control(props) {
  const { onSearch, onSort } = props;

  return (
    <div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Search onSearch={onSearch}></Search>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Sort onSort={onSort}></Sort>
      </div>
    </div>
  );
}

Control.propTypes = {
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
};

Control.defaultProps = {
  onSearch: null,
  onSort: null,
};
export default Control;
