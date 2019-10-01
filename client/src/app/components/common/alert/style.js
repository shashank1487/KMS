import styled from "styled-components";
import { setColor, setRem } from "../../../assets/js/styles";

const AlertWrapper = component => {
  return styled(component)`
    .alert {
      padding: ${setRem(10)};
      margin: 1rem 0 0 0;
      background: ${setColor.alertLightColor};
      color: ${setColor.lightBlackColor};

      &-danger {
        background: ${setColor.dangerColor};
        color: ${setColor.whiteColor};
      }
    }
    .example-enter {
      opacity: 0.01;
    }

    .example-enter.example-enter-active {
      opacity: 1;
      transition: opacity 1000ms ease-in;
    }

    .example-leave {
      opacity: 1;
    }

    .example-leave.example-leave-active {
      opacity: 0.01;
      transition: opacity 1000ms ease-in;
    }
  `;
};

export default AlertWrapper;
