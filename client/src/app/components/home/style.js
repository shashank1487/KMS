import styled from "styled-components";
import {
  setColor,
  setRem,
  setBorder,
  customMedia
} from "../../assets/js/styles";

const HomeWrapper = component => {
  return styled(component)`
    .main-title {
      text-align: center;
      padding-top: 30vh;

      span {
        font-size: ${setRem(25)};
        font-weight: 500;
        text-transform: uppercase;
      }

      .search {
        text-align: center;
        position: relative;
        margin: 25px auto;
        width: 56%;

        .icon {
          left: 15px;
          top: 15px;
          position: absolute;
          z-index: 2;
        }
        input {
          border-radius: 8px;
          border: ${setBorder({
            width: "1px",
            style: "solid",
            color: setColor.borderColor
          })};
          height: 48px;
          text-align: center;
          width:100%;
          color: ${setColor.blackColorWithOpacityFive};
          font-size: ${setRem(14)};
          font-weight: 400;
          outline: none;
        }
      }

      .label {
        color: ${setColor.blackColor};
        opacity: 0.25;
        overflow: hidden;
        text-align: center;
        font-size: ${setRem(12)};
        padding: ${setRem(5)};
        font-weight:700;
        text-transform: uppercase;
        cursor: pointer;
        &:before,
        &:after {
            background-color: ${setColor.blackColor};
            content: "";
            display: inline-block;
            height: ${setRem(1)};
            position: relative;
            vertical-align: middle;
            width: 10%;
        }
        &:before {
          right: 0.5em;
          margin-left: -50%;
        }
        &:after {
          left: 0.5em;
          margin-right: -50%;
        }
        }
    }
    
    ${customMedia.between("mobileXS", "mobileL")`
        .main-title {
          padding-top: 25vh;
            .search {
                margin: 20px auto;
                width: 100%;
                .icon {
                   top:14px;
                }
            }
        }
    `}
    ${customMedia.between("mobileXS", "mobileM")`
        .main-title {
            span {
                font-size: ${setRem(16)};
            }
            .search {
                input {
                    font-size: 0.7rem;
                }
            }
        }
    `}
    ${customMedia.between("mobileXS", "mobileS")`
        .main-title {
            .search {
                input {
                    padding-left: ${setRem(10)};
                    font-size: 0.6rem;
                }
            }
        }
    `}
    ${customMedia.between("mobileM", "mobileL")`
        .main-title {
            .search {
                input {
                    font-size: 0.8rem;
                }
            }
        }
    `}
    ${customMedia.between("mobileL", "tabletL")`
        .main-title {
            .search {
                width: 70%;
            }
        }
    `}
  `;
};

export default HomeWrapper;
