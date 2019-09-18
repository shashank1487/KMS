import React from "react";

import LandingWrapper from "./style";
import { PrimaryButton, SecondaryButton } from "../common/button";
import * as CONSTANTS from "../../utils/constants";

const Landing = ({ className, history }) => {
  return (
    <div className={className}>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1>{CONSTANTS.KMS}</h1>
            <p className="lead mt-2">{CONSTANTS.LANDING_HEADER}</p>
            <div className="buttons">
              <PrimaryButton onClick={() => history.push("/register")}>
                {CONSTANTS.REGISTER}
              </PrimaryButton>

              <SecondaryButton onClick={() => history.push("/login")}>
                {CONSTANTS.LOGIN}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingWrapper(Landing);
