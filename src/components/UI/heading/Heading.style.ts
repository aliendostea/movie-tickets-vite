import styled, { css } from "styled-components";
import { device } from "../../../styles/mediaQuerys";

interface headingTypes {
  theme?: string;
  color?: string;
}
const baseStyles = css`
  font-size: 5.1rem;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1;
  color: var(--color-ligth);

  ${device.phone} {
    font-size: 3.1rem;
  }
`;

const secondaryStyles = css`
  font-size: 3.7rem;
  font-weight: 300;
  letter-spacing: 0.38px;
`;

const thirdStyles = `
  font-size: 1.55rem;
  font-weight: 589;
  letter-spacing: 0.38px;
  color: #afc0ce;

  ${device.phone} {
    font-size: 1.6rem;
  }
`;

const fourthStyles = css`
  font-size: 1.2rem;
  font-weight: 662;
  letter-spacing: 0.38px;
`;

const handleTheme = (theme: string) => {
  switch (theme) {
    case "secondary":
      return `${secondaryStyles}`;
    case "third":
      return `${thirdStyles}`;
    case "fourth":
      return `${fourthStyles}`;
    default:
      return "5.1rem";
  }
};
const handleColor = (color: string) => {
  switch (color) {
    case "ligth":
      return "var(--color-ligth)";
    case "dark":
      return "var(--color-primary-dark)";
    case "secondary":
      return "var(--color-primary-dark)";
    default:
      return "var(--color-ligth)";
  }
};

export const HeadingStyles = styled.h1<headingTypes>`
  ${baseStyles}
  ${({ theme }) => (theme ? handleTheme(theme) : "")};
  ${({ color }) => (color ? handleColor(color) : "")};
`;

export const HeadingPriceStyles = styled.span`
  ${baseStyles}
  display: block;
  justify-self: center;
  font-size: 4.1rem;
  line-height: 0.8;
  text-align: center;
  color: var(--color-sencondary);
`;

export const HeadingPriceParent = styled.div`
  height: 10rem;
  width: 13rem;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 2rem;
  text-align: center;
  border-radius: 21px;
  background-color: #061128;
  position: absolute;
  top: 29px;
  right: 30px;

  ${device.phone} {
    height: 7rem;
    width: 10rem;
    padding: 1rem 0.41rem;
    top: 12px;
    right: 13px;
  }

  & > span:nth-child(1) {
    display: block;
    font-size: 1.4rem;
    line-height: 0.8;
    white-space: nowrap;
    color: #bfbfbf;
  }
`;
