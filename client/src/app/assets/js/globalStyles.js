import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "./styles";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Rubik:400,500");
* {
    margin:0;
    padding:0;
    font-size: 1rem;
    box-sizing: border-box;
}
body {
    color: ${setColor.blackColor};
    ${setFont.primary}
}
h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
}`;

export default GlobalStyles;
