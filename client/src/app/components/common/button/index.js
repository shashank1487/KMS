import styled from "styled-components";
import { setColor, setRem, setBorder } from "../../../assets/js/styles";

const Button = styled.button`
  display: inline-block;
  padding: 0.4rem 1.3rem;
  font-size: ${setRem(12)};
  border: none;
  cursor: pointer;
  margin-right: ${setRem(8)};
  transition: opacity 0.2s ease-in;
  outline: none;
  border-radius: 3px;
  text-transform: uppercase;
  height: 35px;
  &:hover {
    opacity: 0.8;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${setColor.blackColor};
  color: ${setColor.whiteColor};
`;

export const SecondaryButton = styled(Button)`
  background: ${setColor.lightGray};
  /* border: ${setBorder({
    width: "1px",
    style: "solid",
    color: setColor.borderColor
  })}; */
`;

export const PrimaryButtonLarge = styled(Button)`
  background: ${setColor.blackColor};
  color: ${setColor.whiteColor};
  width: 100%;
`;
