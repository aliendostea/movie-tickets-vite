import styled from "styled-components";
import { device } from "../../../styles/mediaQuerys";

export const ChairsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(3.1rem, 4rem));
  justify-content: center;
  align-items: center;
  gap: 1rem 3rem;

  ${device.phone} {
    grid-template-columns: repeat(4, minmax(2.1rem, 4rem));
    gap: 1rem 2rem;
  }
`;

export const ChairsTvContainer = styled.span`
  grid-column: 1 /-1;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1.908px;
  color: #0e224d;
  margin-top: 2rem;
  background-color: #061026;
  border-radius: 15px;
`;

export const ChairsDescriptionsColors = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, auto);
  gap: 2rem;

  ${device.phone} {
    grid-template-columns: repeat(1, auto);
  }
`;

export const DescriptionsColors = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Pcontainer = styled.span`
  display: grid;
  grid-template-columns: repeat(6, max-content);
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;

  ${device.phone} {
    font-size: 1.2rem;
    gap: 6px;
  }

  & span {
    font-size: 4.4rem;
    line-height: 1;
  }
`;

export const ErrorMaxSeats = styled.span`
  display: block;
  color: var(--color-error);
  text-align: center;

  ${device.phone} {
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;

interface NumberSelectedTypes {
  error: boolean;
}

export const NumberSelectedSeatsStyle = styled.span<NumberSelectedTypes>`
  color: ${({ error }) => (error ? `var(--color-error)` : "")};
`;
