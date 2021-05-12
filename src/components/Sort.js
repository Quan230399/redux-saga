import React from "react";
import { connect } from "react-redux";
import * as action from "../actions/actions";

function Sort(props) {
  const { onSortTask } = props;

  const onSortKey = (e) => {
    const key = e.target.name;
    onSortTask(key);
  };

  // const icon = (
  //   <svg
  //     stroke="currentColor"
  //     fill="currentColor"
  //     stroke-width="0"
  //     version="1.2"
  //     baseProfile="tiny"
  //     viewBox="0 0 24 24"
  //     height="1em"
  //     width="1em"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
  //   </svg>
  // );
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
          </a>
        </li>
        <li>
          <a role="button" name="z-a" onClick={onSortKey} href="/#">
            <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
          </a>
        </li>
        <li role="separator" className="divider" />
        <li>
          <a role="button" name="kích hoạt" onClick={onSortKey} href="/#">
            Kích Hoạt
          </a>
        </li>
        <li>
          <a role="button" name="ẩn" onClick={onSortKey} href="/#">
            Ẩn
          </a>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSortTask: (keySort) => {
      dispatch(action.sort(keySort));
    },
  };
};

export default connect(null, mapDispatchToProps)(Sort);
