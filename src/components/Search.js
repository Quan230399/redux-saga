import React from "react";
import debounce from "lodash.debounce";
import PropTypes from "prop-types";

function Search(props) {
  const { onSearch } = props;

  const depouceSearch = debounce(
    (value) => {
      // console.log(value);
      onSearch(value);
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

Search.propTypes = {
  onSearch: PropTypes.func,
};

Search.defaultProps = {
  onSearch: null,
};


export default Search;
