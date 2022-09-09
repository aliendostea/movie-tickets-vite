import styled, { css } from "styled-components";

interface ChairButtonStyleTypes {
  status: string;
  allDisabled: boolean;
}

const statusAvailable = css`
  color: #ffffff9e;
  cursor: pointer;

  &:hover {
    color: #fffffff0;
  }
`;
const statusSelected = css`
  color: var(--color-sencondary);
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;
const statusTaken = css`
  color: #0e224d;
  cursor: not-allowed;
`;

const handleStatus = (status: string) => {
  switch (status) {
    case "available":
      return `${statusAvailable}`;
    case "selected":
      return `${statusSelected}`;
    case "taken":
      return `${statusTaken}`;
    default:
      return "color: #fff";
  }
};

const handleStatusParent = (status: string) => {
  switch (status) {
    case "available":
      return css`
        background-color: transparent;
        cursor: pointer;

        &:hover {
          background-color: #061128;
        }
      `;
    case "selected":
      return css`
        background-color: #071024;
        cursor: pointer;
      `;
    case "taken":
      return css`
        background-color: #09142d;
        cursor: not-allowed;

        &:hover {
          background-color: #09142d;
        }
      `;
    default:
      return "color: #fff";
  }
};

const allDisabledElements = css`
  filter: opacity(35%);
`;

export const ChairButtonStyle = styled.div<ChairButtonStyleTypes>`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 5px;
  border-radius: 14px;
  ${(props) => handleStatusParent(props.status)};
  ${(props) => (props.allDisabled ? allDisabledElements : "")};

  & label {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    position: relative;

    &:disabled {
      cursor: not-allowed;
    }
  }

  & input {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 2;

    &:disabled {
      cursor: not-allowed;
    }
  }

  & span {
    color: #ccc;
    transition: 0.3s ease-in-out;
    position: absolute;
    z-index: 5;
    ${(props) => handleStatus(props.status)}
  }
`;
