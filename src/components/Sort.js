import React from "react";
import PropTypes from "prop-types";

function Sort(props) {
  const { onSort } = props;

  const onSortKey = (e) => {
    onSort(e.target.name);
    };
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
      >
        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li>
          <a role="button" name="a-z" onClick={onSortKey}>
            <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
          </a>
        </li>
        <li>
          <a role="button" name="z-a" onClick={onSortKey}>
            <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
          </a>
        </li>
        <li role="separator" className="divider" />
        <li>
          <a role="button" name="kích hoạt" onClick={onSortKey}>
            Trạng Thái Kích Hoạt
          </a>
        </li>
        <li>
          <a role="button" name="ẩn" onClick={onSortKey}>
            Trạng Thái Ẩn
          </a>
        </li>
      </ul>
    </div>
  );
}

Sort.propTypes = {
  onSort: PropTypes.func,
};

Sort.defaultProps = {
  onSort: null,
};

export default Sort;
