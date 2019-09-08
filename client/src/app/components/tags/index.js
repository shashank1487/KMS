import React from "react";
import PropTypes from "prop-types";

import { sortData } from "../../utils/helper";
import Tag from "./tag";
import TagsWrapper from "./style";

const Tags = ({ className, showAll, tags, clickHandler }) => {
  const handleDelete = tag => {
    if (this.props.handleTagDeleted) {
      this.props.handleTagDeleted(tag);
    }
  };

  tags = sortData(tags);

  return (
    <div className={className}>
      <ul className={`${showAll ? "tags tags-show-all" : "tags"}`}>
        {tags.map((tag, i) => (
          <Tag
            key={i}
            label={tag}
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
  tags: PropTypes.array.isRequired,
  showAll: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired
};

export default TagsWrapper(Tags);
