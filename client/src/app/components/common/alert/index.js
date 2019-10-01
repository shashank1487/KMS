import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AlertWrapper from "./style";

const Alert = ({ className, alerts }) => {
  const x =
    alerts &&
    alerts.length > 0 &&
    alerts.map((alert, idx) => (
      <div key={idx} className={`alert alert-${alert.type}`}>
        {alert.msg}
      </div>
    ));

  return (
    <div className={className}>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={3000}
      >
        {x}
      </ReactCSSTransitionGroup>
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string.isRequired,
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    alerts: state.alerts
  };
};
export default connect(
  mapStateToProps,
  null
)(AlertWrapper(Alert));
