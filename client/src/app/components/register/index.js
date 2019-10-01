import React, { useState, createRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Person } from "styled-icons/material";
import {
  Envelope,
  InfoCircle,
  Building,
  LockAlt
} from "styled-icons/boxicons-solid";

import RegisterWrapper from "./style";
import Form from "../common/validation/controls/form";
import ValidationInput from "../common/validation/controls/input";
import ValidationSelect from "../common/validation/controls/select";
import ValidationButton from "../common/validation/controls/button";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import {
  required,
  isEmail,
  areEqual
} from "../common/validation/rules/register";
import * as CONSTANTS from "../../utils/constants";

const Register = ({ className, setAlert, register }) => {
  let formRef = createRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const { fullName, email, password, passwordConfirm } = formData;

  const changeHandler = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const submitHandler = e => {
    e.preventDefault();
    formRef.current.validateAll();
    if (!formRef.current.getChildContext()._errors.length) {
      register({ ...formData });
    }
  };

  return (
    <div className={className}>
      <div className="container register">
        <div className="card">
          <div className="card-body mx-auto">
            <h4 className="card-title my-3 text-center">
              {CONSTANTS.REGISTER}
            </h4>
            <Form ref={formRef} onSubmit={submitHandler}>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <Person size="20" />
                  </span>
                </div>
                <ValidationInput
                  name="fullName"
                  className="form-control"
                  placeholder="Full name"
                  type="text"
                  value={fullName}
                  onChange={changeHandler}
                  validations={[required]}
                  errorMessage="First name is required"
                />
              </div>
              {/* <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <Person size="20" />
                  </span>
                </div>
                <ValidationInput
                  name="lastName"
                  className="form-control"
                  placeholder="Last name"
                  type="text"
                  value={lastName}
                  onChange={changeHandler}
                  validations={[required]}
                  errorMessage="Last name is required"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <Building size="20" />
                  </span>
                </div>
                <ValidationSelect
                  className="form-control"
                  placeholder="Designation"
                  onChange={changeHandler}
                  name="designation"
                  value={designation}
                  validations={[required]}
                  errorMessage="Designation is required"
                >
                  <option value="">-- Please Select --</option>
                  <option value="1">CAD</option>
                  <option value="2">UX</option>
                  <option value="3s">DevOps</option>
                </ValidationSelect>
              </div>*/}
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
                  errorMessage="Email is required"
                  invalidEmailErrorMessage="Email is invalid"
                />
                <InfoCircle
                  size="20"
                  className="info"
                  title={CONSTANTS.EMAIL_INFO}
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
                  validations={[required, areEqual]}
                  errorMessage="Password is required"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <LockAlt size="20" />
                  </span>
                </div>
                <ValidationInput
                  name="passwordConfirm"
                  className="form-control"
                  placeholder="Re-enter password"
                  type="password"
                  value={passwordConfirm}
                  onChange={changeHandler}
                  validations={[required, areEqual]}
                  errorMessage="Please confirm your password"
                />
              </div>
              <div className="form-group mt-4">
                <ValidationButton type="submit">
                  {CONSTANTS.REGISTER}
                </ValidationButton>
              </div>
              <p className="text-center">
                <span>{CONSTANTS.HAVE_ACCOUNT}</span>
                <Link to="/login" className="mx-1">
                  {CONSTANTS.LOGIN}
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  className: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, register }
)(RegisterWrapper(Register));
