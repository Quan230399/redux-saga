import React from "react";
// import PropTypes from "prop-types";

function Search(props) {
  return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa..."
          name="keyword"
        />
        <span className="input-group-btn">
          <button
            className="btn btn-primary"
            type="button"
          >
            <span className="fa fa-search mr-5" />
            Tìm
          </button>
        </span>
      </div>
  );
}


Search.propTypes = {};


export default Search;
