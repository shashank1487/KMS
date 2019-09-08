import React from "react";

const Tag = ({ parentClass, label, clickHandler, deleteHandler }) => {
  return (
    <li className={parentClass} onClick={clickHandler}>
      <span>{label}</span>
      <a onClick={deleteHandler} href="#delete">
        X
      </a>
    </li>
  );
};

export default Tag;
