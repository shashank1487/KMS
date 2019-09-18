import React from "react";
import validator from "validator";

export const required = (value, props) => {
  if (!value || value === "") {
    return (
      <div className="error mt-1">
        <span className="form-error is-visible d-block">
          {props.errorMessage}
        </span>
      </div>
    );
  }
};

export const isEmail = (value, props) => {
  if (!validator.isEmail(value)) {
    return (
      <div className="error mt-1">
        <span className="form-error is-visible d-block">
          {props.invalidEmailErrorMessage}
        </span>
      </div>
    );
  }
};

export const areEqual = (value, props, components) => {
  const bothUsed =
    components.password[0].isUsed && components.passwordConfirm[0].isUsed;
  const bothChanged =
    components.password[0].isChanged && components.passwordConfirm[0].isChanged;

  if (
    bothChanged &&
    bothUsed &&
    components.password[0].value !== components.passwordConfirm[0].value
  ) {
    return (
      <div className="error mt-1">
        <span className="form-error is-visible d-block">
          Password and Confirm password are not equal
        </span>
      </div>
    );
  }
};
