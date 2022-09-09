import styled from "styled-components";
import { device } from "../../../styles/mediaQuerys";

interface Style {
  bg?: string;
  btnNextCard?: boolean;
}

interface ButtonParentTypes {
  direction: string;
}

export const ButtonStyles = styled.button<Style>`
  &,
  &:link,
  &:visited {
    width: 12rem;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 16px 8px;
    border: none;
    border-radius: 20px;
    background-color: var(--color-sencondary);
    outline: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }

    &:active {
      transform: translateY(3px);
    }

    &:focus {
      outline: none;
    }
  }
`;

export const LinkStyles = styled(ButtonStyles)`
  color: azure;
  background-color: transparent;
  padding: 0;
  border-radius: 0;
`;

const handleDirection = (direction: string) => {
  if (direction === "space-between") return "space-between";
  if (direction === "end") return "end";
  if (direction === "start") return "start";
};

export const ButtonParent = styled.div<ButtonParentTypes>`
  width: 100%;
  display: grid;
  justify-content: ${({ direction }) =>
    direction ? handleDirection(direction) : ""};
  align-items: center;
  grid-template-columns: repeat(2, min-content);
`;

const btnPreviousCardStyle = `
  left: -181px;

  ${device.betweenPcAndTabPort} {
    left: -127px;
  }

  ${device.tabPort} {
    left: -78px;
  }
  ${device.phone} {
    left: -14px;
  }
`;

const btnNextCardStyle = `
  right: -171px;
  ${device.betweenPcAndTabPort} {
    right: -126px;
  }
  ${device.tabPort} {
    right: -78px;
  }
  ${device.phone} {
    right: -14px;
  }
`;

export const NextPreviousButtonStyles = styled(ButtonStyles)`
  position: fixed;
  top: 50%;
  ${({ btnNextCard }) =>
    btnNextCard ? `${btnNextCardStyle}` : `${btnPreviousCardStyle}`};
  z-index: 100;

  ${device.tabPort} {
    width: 7rem;
  }

  &:disabled {
    background-color: #5e66644d;
    color: #6a6a6a;
    cursor: not-allowed;
  }
`;
