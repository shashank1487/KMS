import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AlertWrapper from "./style";

const Alert = ({ className, alerts }) => {
  return (
    <div className={className}>
      {alerts &&
        alerts.length > 0 &&
        alerts.map((alert, idx) => (
          <div key={idx} className={`alert alert-${alert.type}`}>
            {alert.msg}
          </div>
        ))}
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
