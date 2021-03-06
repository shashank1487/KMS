import React, { Fragment } from "react";
import { control } from "react-validation";
import PropTypes from "prop-types";

import { FormInput } from "../../input";

const Input = ({ error, isChanged, isUsed, ...props }) => (
  <Fragment>
    <FormInput
      {...props}
      {...(isChanged && isUsed && error
        ? {
            className: `is-invalid-input ${props.className}`
          }
        : { className: props.className })}
    />
    {isChanged && isUsed && error}
  </Fragment>
);

Input.propTypes = {
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default control(Input);
