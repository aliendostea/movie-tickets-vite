import styled, { css } from "styled-components";
import { device } from "../../../styles/mediaQuerys";

interface bg {
  bg: boolean;
}

const bgStyle = css`
  background-color: hsla(0, 0%, 0%, 0.122);
  backdrop-filter: blur(6px);
  color: var(--color-sencondary);
`;

export const Header = styled.nav<bg>`
  width: 100%;
  height: 6rem;
  display: grid;
  grid-template-columns: 15rem 10rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  ${({ bg }) => (bg ? `${bgStyle}` : "")};
  font-size: 1.7em;
  font-weight: 700;
  transition: 0.4s ease-in-out;
  position: fixed;
  top: 0;
  z-index: 10;

  ${device.phone} {
    padding: 0 2rem;
  }
`;

export const HeaderParent = styled.div`
  grid-column: 1 /-1;
  height: 100%;
  z-index: 10;
`;
