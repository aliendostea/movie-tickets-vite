import styled, { keyframes } from "styled-components";
import { device } from "../../../styles/mediaQuerys";

interface bg {
  bg: number[];
}

export const HomeStyles = styled.div`
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: minmax(50rem, 1fr);
  grid-template-rows: min-content 35rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0 0 2rem 0;

  ${device.tabPort} {
    grid-template-columns: minmax(26rem, 55rem);
    grid-template-rows: min-content 44rem;
  }

  ${device.phone} {
    grid-column: 1 / 7;
    grid-template-rows: min-content 54rem;
  }
`;

export const HomeContainerStyles = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  gap: 3rem;
  justify-self: center;
  background-color: var(--color-primary-dark2);
  border-radius: var(--border-radius-1);
  padding: 6rem 7rem 5rem 6rem;
  /*   box-shadow: 0 0 0 100vmax aliceblue;
  clip-path: inset(-43px -5vmax 0px -5vmax); */

  ${device.tabPort} {
    padding: 4rem 3rem 5rem 4rem;
  }
  ${device.phone} {
    width: calc(100% - 6rem);
    padding: 3rem 2rem 2rem 2.2rem;
  }

  & p {
    font-size: 1.55rem;
    color: #ffffff91;
    letter-spacing: 0.042em;
    line-height: 1.5;

    ${device.phone} {
      font-size: 1.4rem;
    }
  }
`;

const animationElementBg = keyframes`
 0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
`;

export const HomeStylesElementBg = styled.div<bg>`
  width: 99vw;
  height: 42rem;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: ${(props) =>
    props.bg
      ? `
  linear-gradient(180deg,
    rgba(${props.bg[0]}, ${props.bg[1]}, ${props.bg[2]}, 1) 23%,
    rgba(${props.bg[0]}, ${props.bg[1]}, ${props.bg[2]}, 0.333333333) 48%,
    rgba(255, 255, 255, 0) 79%,
    rgba(255, 255, 255, 0) 86%
  )`
      : "white"};
  opacity: 0.7;
  transition: all 0.5s ease;
  position: absolute;
  top: -2px;
  left: 0;
  z-index: 0;
  animation-name: ${animationElementBg};
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
`;

export const HomeContainerStyles2 = styled.div`
  height: 67rem;
  width: 100%;
  display: grid;
  gap: 2.5rem;
  padding: 2.5rem 2.8rem 4.5rem 2.8rem;
  border-radius: var(--border-radius-1);
  background-color: var(--color-primary-dark2);
  overflow-y: scroll;
  position: relative;

  & > span:nth-child(1) {
    width: 37rem;

    ${device.tabPort} {
      width: 25rem;
    }

    ${device.phone} {
      width: 18rem;
    }
  }
`;
