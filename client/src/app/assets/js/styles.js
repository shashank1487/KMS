import { generateMedia } from "styled-media-query";

export const setColor = {
  blackColor: "#000",
  whiteColor: "#fff",
  grayColor: "#ccc",
  lightGrayColor: "#fcfcfc",
  borderColor: "rgba(0,0,0, 0.2)",
  linkGrayColor: "#8f8f8f",
  blackColorWithOpacityOne: "rgba(0, 0, 0, 0.1)",
  blackColorWithOpacityFive: "rgba(0, 0, 0, 0.5)",
  primaryColor: "#17a2b8",
  lightBlackColor: "#333",
  alertLightColor: "#f4f4f4",
  dangerColor: "#dc3545"
};

export const setFont = {
  primary: "font-family: 'Rubik', sans-serif;"
};

export const setRem = (pixels = 16) => {
  return `${pixels / 16}rem`;
};

export const setBorder = ({
  width = "1px",
  style = "solid",
  color = "black"
}) => {
  return `${width} ${style} ${color}`;
};

export const customMedia = generateMedia({
  mobileXS: "275px",
  mobileS: "321px",
  mobileM: "376px",
  mobileL: "415px",
  tablet: "769px",
  tabletL: "1025px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
});
