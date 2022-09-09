import styled from "styled-components";
import { device } from "../../../styles/mediaQuerys";

export const SwiperStyles = styled.div`
  width: calc(100% - 8rem);
  height: 52rem;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 2rem 2rem 2rem;
  background-color: transparent;

  ${device.tabLand} {
    width: calc(100% - 2rem);
    padding: 0 2rem 2rem 0rem;
  }

  ${device.phone} {
    height: 47rem;
    width: 100%;
    padding: 0;
  }

  & .swiper-slide {
    width: 31.57rem;

    ${device.phone} {
      width: 25rem;
    }
  }

  & .swiper-slide:first-child {
    margin-left: 30px;
  }
`;

export const SwiperStylesTest = styled.div`
  width: 25.5rem;
  height: 43rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3e3e333;
  border-radius: var(--border-radius-1);
  text-align: center;
`;
