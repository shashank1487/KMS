import styled from "styled-components";

import { setColor, customMedia } from "../../assets/js/styles";

const LoginWrapper = component => {
  return styled(component)`
    .login {
      width: 50%;
      height: 93vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .card {
        box-shadow: 1px 1px 5px 1px #ccc;
        .card-body {
          width: 90%;
          .form-group {
            .is-invalid-input {
              border: 1px solid red;
            }
            .error {
              width: 100%;
              .form-error {
                color: red;
                font-size: 12px;
                font-weight: 500;
              }
            }
          }
          p {
            span {
              font-size: 0.9rem;
            }
            a {
              font-size: 0.9rem;
              font-weight: 600;
              color: ${setColor.linkGrayColor};
            }
          }
        }
      }
    }
    ${customMedia.between("mobileXS", "mobileS")`
      .login {
        width: 100%;
      }
    `}
    ${customMedia.between("mobileS", "mobileL")`
      .login {
        width: 90%;
      }
    `}
  `;
};

export default LoginWrapper;
