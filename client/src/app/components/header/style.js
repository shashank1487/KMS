import styled from "styled-components";
import {
  setColor,
  setRem,
  setBorder,
  customMedia
} from "../../assets/js/styles";

const HeaderWrapper = component => {
  return styled(component)`
    .navbar {
      border-bottom: ${setBorder({
        width: "1px",
        style: "solid",
        color: setColor.borderColor
      })};
      .navbar-brand {
        width: 35%;
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;

        span{
          margin:0 5px;
        }
      }
      .navbar-collapse {
        ul.links {
          width: 85%;
          li {
            padding: 0 ${setRem(12)};
            a {
              font-size: 0.75rem;
              font-weight: 500;
              color: ${setColor.linkGrayColor};
              text-transform: uppercase;
            }
          }
        }
        ul.settings {
          li {
            padding: 0 ${setRem(10)};
          }
        }
        ul.auth {
          width: 100%;
          justify-content: flex-end;
          li {
            padding: 0 ${setRem(10)};
            a {
              font-size: 0.75rem;
              font-weight: 500;
              color: ${setColor.linkGrayColor};
              text-transform: uppercase;

              span{
                font-size: 0.75rem;
              }
            }
          }
        }
      }
    }
    ${customMedia.lessThan("mobileS")`
      .navbar {
        .navbar-brand {
          font-size:0.8rem;
        }
      }
    `}

    ${customMedia.between("mobileS", "mobileM")`
      .navbar {
        .navbar-brand {
          font-size:0.9rem;
        }
      }
    `}

    ${customMedia.between("mobileM", "tabletL")`
      .navbar{
        .navbar-brand {
          font-size: 1.1rem;
        }
      }
    `}
    ${customMedia.between("mobileXS", "tablet")`
    .navbar{
      .navbar-brand {
        width: 75%;
      }
      .navbar-collapse {
        ul.links {
          width: 100%;
          li {
            padding: 0;
          }
        }
        ul.settings {
          li {
            padding: 0;
          }
        }
        ul.auth {
          li {
            padding: 0;
          }  
        }
      }
    }
    `}
    ${customMedia.greaterThan("tablet")`
      .navbar{
        .navbar-brand {
          width: 32%;
        }
      }
    `} 
  `;
};

export default HeaderWrapper;
