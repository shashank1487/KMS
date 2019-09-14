import React, { useEffect, useReducer, memo } from "react";
import PropTypes from "prop-types";

import { sortData } from "../../utils/helper";
import { getData } from "../../utils/apiHelper";
import * as Constants from "../../utils/constants";
import { prepareEndpoint } from "../../utils/endpoints";
import Tag from "./tag";
import TagsWrapper from "./style";
import tagsReducer, { initialState } from "../../reducers/tags";
import types from "../../actions/types";

const Tags = ({ className, showAll, clickHandler }) => {
  const [state, dispatch] = useReducer(tagsReducer, initialState);

  useEffect(() => {
    dispatch({ type: types.REQUEST_TAGS });
    getData(prepareEndpoint(Constants.GET_ALL_TAGS_API))
      .then(resp => {
        dispatch({ type: "RECEIVED_TAGS_SUCCESS", payload: resp.data });
      })
      .catch(err => {
        dispatch({ type: "RECEIVED_TAGS_FAILURE", payload: err });
      });
  }, []);

  const handleDelete = tag => {
    if (this.props.handleTagDeleted) {
      this.props.handleTagDeleted(tag);
    }
  };

  const sortedTags = sortData(state.tags, "name");

  return (
    <div className={className}>
      <ul className={`${showAll ? "tags tags-show-all" : "tags"}`}>
        {sortedTags.length > 0 &&
          sortedTags.map((tag, i) => (
            <Tag
              key={i}
              label={tag.name}
              parentClass="tag"
              deleteHandler={event => {
                event.stopPropagation();
                handleDelete(tag);
              }}
              clickHandler={e => clickHandler(e, tag)}
            />
          ))}
      </ul>
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
  showAll: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired
};

export default TagsWrapper(Tags);
