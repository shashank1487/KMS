import styled from "styled-components";

import { setRem } from "../../assets/js/styles";
import showcase from "../../assets/images/kms-1.jpeg";

const LandingWrapper = component => {
  return styled(component)`
    .landing {
      position: relative;
      background: url(${showcase}) no-repeat center center/cover;
      height: 100vh;

      .dark-overlay {
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .landing-inner {
          color: #fff;
          height: 100%;
          width: 80%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;

          h1 {
            font-size: ${setRem(48)};
          }
          p {
            font-size: ${setRem(16)};
          }
        }
      }
    }
  `;
};

export default LandingWrapper;
