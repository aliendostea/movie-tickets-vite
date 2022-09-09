import styled from "styled-components";
import { device } from "../../../styles/mediaQuerys";
import { ButtonStyles } from "../button/Button.style";

export const ModalStyle = styled.div`
  height: 100%;
  padding: 2rem 0;
  backdrop-filter: saturate(91%) blur(6px);
  position: relative;
  z-index: 11;
`;

export const ModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  justify-items: center;
  align-content: center;
  gap: 1rem;
  overflow: hidden;
`;

export const ModalParent = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: minmax(22rem, 63rem);
  grid-template-rows: minmax(60rem, 80rem);
  background-color: rgba(0, 0, 0, 0.432);
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  right: 0;
  -webkit-animation: opacity1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: opacity1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  z-index: 100;

  ${device.tabPort} {
    grid-template-columns: minmax(22rem, 44rem);
  }
  ${device.phone} {
    grid-template-columns: minmax(32rem, calc(100vw - 4rem));
  }
`;

export const BtnClose = styled(ButtonStyles)`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  color: var(--color-ligth);
  justify-content: center;
  border: 3px solid aliceblue;
  background-color: transparent;
  position: absolute;
  top: 19px;
  right: -6vw;
  z-index: 10;

  ${device.betweenPcAndTabPort} {
    right: -63px;
  }
  ${device.phone} {
    right: -14px;
    top: 4px;
  }
`;
