import styled from "styled-components";

export const SuccessSectionStyle = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 5;

  & div:nth-child(2) {
    display: grid;
    margin: 6rem 0rem 0rem 0rem;
  }

  & div:nth-child(2) > span:nth-child(1) {
    margin-bottom: 2rem;
  }
  & div:nth-child(2) > span:nth-child(2) {
    font-size: 3.1rem;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1;
    color: var(--color-sencondary);
  }
`;
