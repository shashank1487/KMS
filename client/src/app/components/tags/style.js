import styled from "styled-components";
import {
  setBorder,
  setColor,
  customMedia,
  setRem
} from "../../assets/js/styles";

const TagsWrapper = component => {
  return styled(component)`
    .tags {
      padding: ${setRem(5)};
      width: 56%;
      margin: 10px auto;
      max-height: ${setRem(100)};
      overflow: hidden;

      .tag {
        display: inline-block;
        margin: 0 5px;
        border-radius: ${setRem(20.5)};
        border: ${setBorder({
          width: "1px",
          style: "solid",
          color: setColor.borderColor
        })};
        background: ${setColor.whiteColor};
        padding: 6px 10px;
        margin-bottom: ${setRem(10)};
        cursor: pointer;
        &:hover {
          background: ${setColor.lightGray};
          color: ${setColor.blackColor};
        }
        span {
          font-size: 0.75rem;
          font-weight: 400;
          text-transform: capitalize;
        }
        a {
          color: ${setColor.blackColor};
          opacity: 1;
          margin: 0 0 0 0.5em;
          font-size: ${setRem(11)};
          font-weight: 500;
        }
      }
    }
    .tags-show-all {
      overflow: visible;
    }

    ${customMedia.between("mobileXS", "mobileL")`
        .tags {
            width:100%;
            max-height: ${setRem(140)};

            .tag{
                padding: 5px 10px
            }
            span {
                font-size: 0.5rem;
                font-weight: 400;
            }
        }
    `}
  `;
};

export default TagsWrapper;
