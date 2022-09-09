import styled, { css } from "styled-components";

interface InputProps {
  fullWidth?: boolean;
  error?: boolean;
}

const borderPx: string = "4px solid";

const handleError = (error: boolean) => {
  if (error) {
    return css`
      border: ${borderPx} var(--color-error);

      &:focus {
        border: ${borderPx} var(--color-error);
      }
    `;
  }

  return "";
};

export const InputStyles = styled.input<InputProps>`
  width: 100%;
  display: inline-block;
  font-family: "Cairo", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-ligth);
  letter-spacing: 0.31px;
  background-color: transparent;
  border: ${borderPx} #d9d0e9;
  border-radius: 4.5px;
  outline: none;
  overflow-x: hidden;
  padding: 0 1.8rem 0 1.2rem;
  resize: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border: ${borderPx} rgb(27, 144, 212);
    box-shadow: 0 3px 20px #a68787;
  }

  ${({ error }) => (error ? handleError(error) : "")};
`;

export const BoxInput = styled.div<{ fullWidth?: boolean }>`
  ${({ fullWidth }) => (fullWidth ? `grid-column: 1 / -1` : "")};
  width: 100%;
  display: grid;
  grid-template-rows: min-content 6rem 2rem;
`;

interface LabelProps {
  error?: boolean;
}

export const LabelStyle = styled.label<LabelProps>`
  display: block;
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  ${({ error }) => (error ? `var(--color-error)` : "")};
`;

export const SpanError = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: var(--color-error);
  margin-top: 0.5rem;
`;
