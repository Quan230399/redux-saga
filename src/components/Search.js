import React from "react";
import debounce from "lodash.debounce";
import { connect } from "react-redux";
import * as action from "../actions/actions";
import slugString from "slug";

function Search(props) {
  const { onSearchTask } = props;

  const depouceSearch = debounce(
    (value) => {
      onSearchTask(slugString(value));
    },
    700,
    []
  );

  const handleChange = (e) => {
    const { value } = e.target;
    depouceSearch(value);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Nhập từ khóa..."
        name="keyword"
        onChange={handleChange}
      />
      <span className="input-group-btn">
        <button className="btn btn-primary" type="button">
          <span className="fa fa-search mr-5" />
          Tìm
        </button>
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearchTask: (key) => {
      dispatch(action.search(key));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
