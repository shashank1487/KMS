import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Search from "../common/search";
import Tags from "../tags";
import HomeWrapper from "./style";
import * as tagActions from "../../actions/tags";
import * as Constants from "../../utils/constants";

class Home extends Component {
  state = {
    showAllTags: false,
    selectedTags: ""
  };

  componentDidMount() {
    this.props.fetchTagsHandler();
  }

  handleSearch = (event, tag = "") => {
    let selectedTag = "";
    if (!tag) {
      selectedTag = event.target.value;
    } else {
      selectedTag = tag;
    }
    this.setState(prevState => {
      let updatedTags = `${
        prevState.selectedTags
          ? prevState.selectedTags + selectedTag + "; "
          : selectedTag + "; "
      }`;
      return { ...prevState, selectedTags: updatedTags };
    });
  };

  render = () => {
    const { className, tags } = this.props;
    const { showAllTags, selectedTags } = this.state;
    return (
      <div className={`${className} container`}>
        <div className="col-md-12 main-title">
          <span>{Constants.MAIN_HEADING}</span>
          <Search
            parentClass="search"
            searchText={selectedTags}
            changeHandler={this.handleSearch}
          />
          {tags && tags.length > 0 && (
            <Tags
              tags={tags.map(tag => tag.name)}
              showAll={showAllTags}
              clickHandler={this.handleSearch}
            />
          )}
          <div
            onClick={() => {
              this.setState({ showAllTags: true });
            }}
            className="label"
            hidden={showAllTags}
          >
            {Constants.SHOW_MORE_TAGS}
          </div>
        </div>
      </div>
    );
  };
}

Home.propTypes = {
  className: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    tags: state.tags.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTagsHandler: () => dispatch(tagActions.fetchTags())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWrapper(Home));
