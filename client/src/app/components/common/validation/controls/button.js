import React, { memo } from "react";
import PropTypes from "prop-types";
import { button } from "react-validation";

import { PrimaryButtonLarge } from "../../button";

const Button = ({ hasErrors, ...props }) => {
  return <PrimaryButtonLarge {...props} disabled={hasErrors} />;
};

Button.propTypes = {
  hasErrors: PropTypes.bool
};

export default memo(button(Button));
