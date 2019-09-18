import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Search from "../common/search";
import Tags from "../tags";
import HomeWrapper from "./style";
import * as Constants from "../../utils/constants";

class Home extends Component {
  state = {
    selectedTags: ""
  };

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
    const { className } = this.props;
    const { selectedTags } = this.state;
    return (
      <div className={`${className} container`}>
        <div className="col-md-12 main-title">
          <span>{Constants.MAIN_HEADING}</span>
          <Search
            parentClass="search"
            searchText={selectedTags}
            changeHandler={this.handleSearch}
          />
          <Tags clickHandler={this.handleSearch} />
        </div>
      </div>
    );
  };
}

Home.propTypes = {
  className: PropTypes.string.isRequired
};

// const mapStateToProps = (state, props) => {
//   return {
//     tags: state.tags.tags
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchTagsHandler: () => dispatch(tagActions.fetchTags())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HomeWrapper(Home));

export default HomeWrapper(Home);
