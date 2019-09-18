import styled from "styled-components";

import { setColor, setRem, setBorder } from "../../../assets/js/styles";

const Input = styled.input`
  border: ${setBorder({
    width: "1px",
    style: "solid",
    color: setColor.borderColor
  })};
  color: ${setColor.blackColorWithOpacityFive};
  font-size: ${setRem(14)};
  font-weight: 400;
  outline: none;
`;

export const SearchInput = styled(Input)`
  text-align: center;
  border-radius: ${setRem(8)};
  width: 100%;
  height: ${setRem(48)};
`;

export const FormInput = styled(Input)`
  background-color: ${setColor.lightGrayColor};
  background-clip: border-box;
  height: 40px;
`;
