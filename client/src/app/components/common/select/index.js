import styled from "styled-components";
import { setColor, setRem, setBorder } from "../../../assets/js/styles";

const Select = styled.select`
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

export const FormSelectLarge = styled(Select)`
  background-color: ${setColor.lightGrayColor};
  background-clip: border-box;
  height: 40px;
`;
