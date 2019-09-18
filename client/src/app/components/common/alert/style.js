import styled from "styled-components";
import { setColor } from "../../../assets/js/styles";

const AlertWrapper = component => {
  return styled(component)`
    .alert {
      padding: 0.8rem;
      margin: 1rem 0 0 0;
      opacity: 0.9;
      background: ${setColor.alertLightColor};
      color: ${setColor.lightBlackColor};
      transition: opacity 1000ms linear;

      &-danger {
        background: ${setColor.dangerColor};
        color: ${setColor.whiteColor};
      }
    }
  `;
};

export default AlertWrapper;
