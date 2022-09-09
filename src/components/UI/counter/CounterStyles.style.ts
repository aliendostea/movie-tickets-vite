import styled from "styled-components";
import { ButtonStyles } from "../button/Button.style";

export const CounterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: center;
  align-items: start;
  gap: 2rem;
`;

export const CounterP = styled.p`
  width: 10rem;
  font-size: 7.5rem;
  font-weight: 272;
  line-height: 0.6;
  text-align: center;
  color: var(--color-sencondary);
`;

export const CounterBtnStyles = styled(ButtonStyles)`
  width: 6rem;
  height: 5rem;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: aliceblue;
  transition: 0.12s ease-in-out;

  & span {
    display: grid;
    font-size: 3.3rem;
    line-height: 0.6;
    color: var(--border-radius-1);
    margin-bottom: 4px;
  }

  &:hover {
    transform: translateY(-6px);
  }

  &:active {
    transform: translateY(4px);
  }
`;
