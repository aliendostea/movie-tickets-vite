import styled from "styled-components";
import { device } from "../../../styles/mediaQuerys";

const border = "5px";

export const RadioChipStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;

  & input {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 0;

    &:checked ~ label {
      border: ${border} solid var(--color-sencondary);
    }
  }

  & label {
    border: ${border} solid aliceblue;
    border-radius: var(--border-radius-1);
    background-color: aliceblue;
    padding: 1rem 2rem;
    color: var(--color-primary-dark);
    cursor: pointer;
    transition: 0.2s ease-in-out;
    user-select: none;
    z-index: 2;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const RadioChipsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(6rem, 10rem));
  justify-content: center;
  align-items: center;
  gap: 2rem;

  ${device.tabPort} {
    grid-template-columns: repeat(2, minmax(6rem, 10rem));
  }
  ${device.tabPort} {
    grid-template-columns: repeat(1, minmax(6rem, 10rem));
    gap: 1rem;
  }
`;
