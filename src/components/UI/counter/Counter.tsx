import { CountActionKind } from "../../../types/Counter";
import {
  CounterBtnStyles,
  CounterContainer,
  CounterP,
} from "./CounterStyles.style";

interface CounterTypes {
  count: number;
  maxCount: number;
  minCount: number;
  incrementActionKind: CountActionKind;
  decrementActionKind: CountActionKind;
  dispatchTicketsState: ({ type: string }: { type: CountActionKind }) => void;
}

const Counter = ({
  count = 0,
  maxCount,
  minCount,
  incrementActionKind,
  decrementActionKind,
  dispatchTicketsState,
}: CounterTypes) => {
  const handleIncrementCount = () => {
    if (count === maxCount) return;
    dispatchTicketsState({ type: incrementActionKind });
  };

  const handleDecrementCount = () => {
    if (count === minCount) return;
    dispatchTicketsState({ type: decrementActionKind });
  };

  return (
    <CounterContainer>
      <CounterBtnStyles onClick={handleDecrementCount}>
        <span>-</span>
      </CounterBtnStyles>
      <CounterP>{count} </CounterP>
      <CounterBtnStyles onClick={handleIncrementCount}>
        <span>+</span>
      </CounterBtnStyles>
    </CounterContainer>
  );
};

export default Counter;
