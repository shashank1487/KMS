import React from "react";
import PropTypes from "prop-types";
import { Search } from "styled-icons/material";

import * as Constants from "../../../utils/constants";

const SearchComponent = ({ parentClass, searchText, changeHandler }) => {
  return (
    <div className={parentClass}>
      <Search size="22" className="icon" />
      <input
        type="text"
        value={searchText}
        placeholder={Constants.SEARCH_PLACEHOLDER_TEXT}
        onChange={changeHandler}
      />
    </div>
  );
};

SearchComponent.propTypes = {
  parentClass: PropTypes.string.isRequired,
  searchText: PropTypes.string,
  changeHandler: PropTypes.func.isRequired
};

export default SearchComponent;
