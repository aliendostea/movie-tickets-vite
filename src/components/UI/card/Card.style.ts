import styled, { css, keyframes } from "styled-components";
import { device } from "../../../styles/mediaQuerys";
import { ButtonStyles } from "../button/Button.style";

interface CardStylesTypes {
  opacity?: string;
  active?: boolean;
}

const animationCard = keyframes`
  0% {
    opacity: 0;
    transform: translateY(90px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardStyles = styled.div<CardStylesTypes>`
  height: 44rem;
  width: 25.5rem;
  display: grid;
  grid-template-rows: 34.6rem min-content;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: var(--border-radius-1);
  overflow: hidden;
  color: aliceblue;
  text-align: center;
  background-color: white;
  opacity: ${(props) => (props.opacity ? props.opacity : "1")};
  border: ${(props) =>
    props.active ? "6px solid var(--color-sencondary)" : "0 solid #ffffff"};
  transform: ${(props) =>
    props.active ? "translateY(2px) scale(1.06)" : "translateY(0) scale(1)"};
  transition: 0.2s ease-in-out;
  position: relative;
  -webkit-animation: ${animationCard} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
    both;
  animation: ${animationCard} 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) both;

  ${device.phone} {
    height: 40rem;
    width: 22.5rem;
    grid-template-rows: 30.6rem min-content;
  }

  ${(props) =>
    props.active === true
      ? css`
          &:hover {
            transform: translateY(6px) scale(1.07);
          }
        `
      : css`
          &:hover {
            transform: translateY(-5px) scale(1.02);
          }
        `}

  & span,
  button {
    justify-self: center;
    z-index: 5;
  }
  & span {
    font-size: 1.9rem;
    font-weight: 400;
  }

  &::before {
    content: "";
    width: 100%;
    height: 21rem;
    background: linear-gradient(
      0deg,
      rgba(12, 23, 47, 1) 37%,
      rgba(12, 23, 47, 0.3984944319524685) 67%,
      rgba(12, 23, 47, 0) 80%
    );
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
`;

export const CardButton = styled(ButtonStyles)`
  border-radius: 27px;
  width: 15rem;
`;

const widthElemtSkeleton = "400px";

const animationSkeleton = keyframes`
  0% {
    background-position: -${widthElemtSkeleton} 0px;
  }
  100% {
    background-position: ${widthElemtSkeleton} 0px;
  }
`;

const SkeletonBaseCard = css`
  border-radius: var(--border-radius-1);
  background-color: #d9d9d9;
  color: white;
  opacity: 0.049;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      #d9d9d9 0%,
      #888b94 20%,
      #d9d9d9 40%,
      #d9d9d9 100%
    );
    background-size: ${widthElemtSkeleton} ${widthElemtSkeleton};
    background-repeat: no-repeat;
    animation: ${animationSkeleton} 1s linear infinite;
  }
`;

export const SkeletonCardStyle = styled.div`
  ${SkeletonBaseCard}
  width: 25.5rem;
  height: 39rem;
`;

export const SkeletonContainerStyle = styled.div`
  ${SkeletonBaseCard}
  width: calc(100% - 4rem);
  height: 100%;
  padding: 0 2rem;
  justify-self: center;
`;

export const ContainerLoading = styled.div`
  display: grid;
  grid-template-columns: repeat(6, min-content);
  gap: 1.2rem;
  padding: 4rem 0 0 2rem;
  overflow: hidden;
`;
