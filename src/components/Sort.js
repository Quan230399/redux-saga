import React, { useState } from "react";
import PropTypes from "prop-types";

function Sort(props) {
  const { onSort } = props;
  const [key, setKey] = useState("");

  const onSortKey = (e) => {
    const name = e.target.name;
    onSort(name);
    setKey(name);
  };

  const icon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1.2"
      baseProfile="tiny"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
    </svg>
  );
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
          <a role="button" name="a-z" onClick={onSortKey} href="/#">
            <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
            {key === "a-z" ? icon : ""}
          </a>
        </li>
        <li>
          <a role="button" name="z-a" onClick={onSortKey} href="/#">
            <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
            {key === "z-a" ? icon : ""}
          </a>
        </li>
        <li role="separator" className="divider" />
        <li>
          <a role="button" name="kích hoạt" onClick={onSortKey} href="/#">
            Kích Hoạt
            {key === "kích hoạt" ? icon : ""}
          </a>
        </li>
        <li>
          <a role="button" name="ẩn" onClick={onSortKey} href="/#">
            Ẩn
            {key === "ẩn" ? icon : ""}
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
