import styled, { css } from "styled-components";
import { device } from "../../../styles/mediaQuerys";
import { ButtonStyles } from "../button/Button.style";

export const FormStyle = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, min-content);
  gap: 2rem 1rem;

  ${device.phone} {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 3rem;
  }
`;

export const ErrorForm = styled.span`
  grid-column: 1 /-1;
  text-align: center;
  color: var(--color-error);
`;

interface btn {
  isLoading: boolean;
}

const disabledBtn = css`
  cursor: not-allowed;
  filter: opacity(35%);
`;

export const BtnFormStyle = styled(ButtonStyles)<btn>`
  grid-column: 1 / -1;
  height: 7rem;
  width: 100%;
  justify-self: center;
  ${(props) => (props.isLoading ? disabledBtn : "")};
`;
