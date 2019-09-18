import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { control } from "react-validation";

import { FormSelectLarge } from "../../select";

const Select = ({ error, isChanged, isUsed, ...props }) => (
  <Fragment>
    <FormSelectLarge
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

Select.propTypes = {
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default control(Select);
