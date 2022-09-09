import styled from "styled-components";
import { device } from "../../../styles/mediaQuerys";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      10,
      [col-start] minmax(9rem, 13rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
  padding: 0 0 16rem 0;

  ${device.betweenPcAndTabPort2} {
    grid-template-columns:
      [full-start] minmax(6rem, 1fr) [center-start] repeat(
        10,
        [col-start] minmax(min-content, 13rem) [col-end]
      )
      [center-end] minmax(6rem, 1fr) [full-end];
  }

  ${device.tabPort} {
    grid-template-columns:
      [full-start] minmax(2rem, 1fr) [center-start] repeat(
        4,
        [col-start] minmax(min-content, 20rem) [col-end]
      )
      [center-end] minmax(2rem, 1fr) [full-end];
  }

  ${device.phone} {
    grid-template-columns:
      [full-start] minmax(2rem, 1fr) [center-start] repeat(
        4,
        [col-start] minmax(4rem, 14rem) [col-end]
      )
      [center-end] minmax(2rem, 1fr) [full-end];
  }
`;
