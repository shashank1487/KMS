import React from "react";
import { form } from "react-validation";
import PropTypes from "prop-types";

const Form = ({
  getValues,
  validate,
  validateAll,
  showError,
  hideError,
  ...props
}) => {
  return <form {...props} />;
};

Form.propTypes = {
  getValues: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  validateAll: PropTypes.func.isRequired,
  showError: PropTypes.func.isRequired,
  hideError: PropTypes.func.isRequired
};

export default form(Form);
