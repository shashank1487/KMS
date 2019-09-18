import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Envelope, LockAlt } from "styled-icons/boxicons-solid";

import LoginWrapper from "./style";
import Form from "../common/validation/controls/form";
import ValidationInput from "../common/validation/controls/input";
import ValidationButton from "../common/validation/controls/button";

import * as actions from "../../actions/alert";
import { required, isEmail } from "../common/validation/rules/register";
import * as CONSTANTS from "../../utils/constants";

const Login = ({ className }) => {
  let formRef = null;

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const changeHandler = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const submitHandler = e => {
    e.preventDefault();
    formRef.validateAll();
    if (!formRef.getChildContext()._errors.length) {
      // TODO: Call api to login
      console.log("login called");
    }
  };

  return (
    <div className={className}>
      <div className="container login">
        <div className="card">
          <div className="card-body mx-auto">
            <h4 className="card-title my-3 text-center">{CONSTANTS.LOGIN}</h4>
            <Form
              ref={form => {
                formRef = form;
              }}
              onSubmit={submitHandler}
            >
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <Envelope size="20" />
                  </span>
                </div>
                <ValidationInput
                  name="email"
                  className="form-control email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={changeHandler}
                  validations={[required, isEmail]}
                  autoComplete="off"
                  errorMessage="Email is required"
                  invalidEmailErrorMessage="Email is invalid"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <LockAlt size="20" />
                  </span>
                </div>
                <ValidationInput
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={changeHandler}
                  validations={[required]}
                  errorMessage="Password is required"
                />
              </div>
              <div className="form-group mt-4">
                <ValidationButton type="submit">
                  {CONSTANTS.LOGIN}
                </ValidationButton>
              </div>
              <p className="text-center">
                <span>{CONSTANTS.DO_NOT_HAVE_ACCOUNT}</span>
                <Link to="/register" className="mx-1">
                  {CONSTANTS.REGISTER}
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string.isRequired
};

// const mapDispatchToProps = dispatch => {
//   let setAlertAction;
//   return {
//     setAlert: (msg, type) => {
//       setAlertAction = actions.setAlert(msg, type);
//       dispatch(setAlertAction);
//     },
//     removeAlert: () => dispatch(actions.removeAlert(setAlertAction.payload.id))
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(LoginWrapper(Login));

export default LoginWrapper(Login);
