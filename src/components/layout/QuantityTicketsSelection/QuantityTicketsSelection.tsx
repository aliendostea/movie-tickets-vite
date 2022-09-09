import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { CountActionKind } from "../../../types/Counter";
import Counter from "../../UI/counter/Counter";
import DatePickerComp from "../../UI/datePicker/DatePickerComp";
import Heading from "../../UI/heading/Heading";
import HeadingPrice from "../../UI/heading/HeadingPrice";
import RadioButtonChip from "../../UI/radioButtonChip/RadioButtonChip";
import { RadioChipsContainer } from "../../UI/radioButtonChip/RadioButtonChip.style";
import { HomeContainerStyles2 } from "../home/Home.style";
import NextPreviousButton from "../../UI/button/NextPreviousButton";
import { ButtonParent } from "../../UI/button/Button.style";
import { NextPreviousButtonParent } from "../../UI/button/NextPreviousButtonParent";
import { useCustomHookParameter } from "../../../hooks/use-custom-hook-getData";
import { FIND_MOVIE_TIME_BY_ID } from "../../../grapql/querys";
import {
  getAnimationObj,
  getInitialAnimationObj,
} from "../../../animation/animation";

interface QntyTicketsSelectTypes {
  currentMovieTitle: string | undefined;
  handleOnChangeRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnDatePickerChange: (date: {}) => void;
  hourSelected: string;
  dateSelected: {} | null;
  numberAdultTickets: number;
  numberChildrenTickets: number;
  dispatchTicketsState: ({ type: string }: { type: CountActionKind }) => void;
  ticketsStateFinalAccount: number;
  currency: string;
  nextCardModal: () => void;
}

interface MovieStartTime {
  hour: string;
}

/* ref:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined; */

const QuantityTicketsSelection = React.forwardRef(
  (
    {
      currentMovieTitle,
      handleOnChangeRadioButton,
      hourSelected,
      dateSelected,
      numberAdultTickets,
      numberChildrenTickets,
      dispatchTicketsState,
      ticketsStateFinalAccount,
      currency,
      nextCardModal,
      handleOnDatePickerChange,
    }: QntyTicketsSelectTypes,
    ref: any
  ) => {
    const [getPerson, result] = useCustomHookParameter(FIND_MOVIE_TIME_BY_ID);
    const [hours, setHours] = useState<MovieStartTime[] | []>([]);

    useEffect(() => {
      const animation1 = gsap.fromTo(
        ref.current,
        getAnimationObj({
          positiveTranslateX: false,
        }),
        getInitialAnimationObj({ delay: 0.31 })
      );

      return () => {
        animation1.kill();
      };
    }, []);

    useEffect(() => {
      if (result.data === undefined) return;

      setHours(result.data.findMovieTime.times);
    }, [result]);

    useEffect(() => {
      getPerson({
        variables: { findMovieTimeId: 123 },
      });
    }, []);

    return (
      <>
        <HomeContainerStyles2 ref={ref}>
          <Heading renderAs="span" theme="secondary">
            {currentMovieTitle}
          </Heading>

          <HeadingPrice title={ticketsStateFinalAccount} currency={currency} />

          <Heading renderAs="span" theme="third">
            Select Date:
          </Heading>
          <DatePickerComp
            handleOnDatePickerChange={handleOnDatePickerChange}
            value={dateSelected}
          />
          <Heading renderAs="span" theme="third">
            Select Hours:
          </Heading>
          <RadioChipsContainer>
            {hours?.map((item) => (
              <RadioButtonChip
                key={item.hour}
                name="hours"
                label={item.hour}
                onChange={handleOnChangeRadioButton}
                isChecked={hourSelected === item.hour}
              />
            ))}
          </RadioChipsContainer>
          <Heading renderAs="span" theme="third">
            Select how many adult tickets:
          </Heading>
          <Counter
            count={numberAdultTickets}
            maxCount={15}
            minCount={0}
            incrementActionKind={CountActionKind.ADULT_TICKETS_INCREMENT}
            decrementActionKind={CountActionKind.ADULT_TICKETS_DECREMENT}
            dispatchTicketsState={dispatchTicketsState}
          />
          <Heading renderAs="span" theme="third">
            Select how many children tickets:
          </Heading>
          <Counter
            count={numberChildrenTickets}
            maxCount={15}
            minCount={0}
            incrementActionKind={CountActionKind.CHILDREN_TICKETS_INCREMENT}
            decrementActionKind={CountActionKind.CHILDREN_TICKETS_DECREMENT}
            dispatchTicketsState={dispatchTicketsState}
          />
        </HomeContainerStyles2>

        <NextPreviousButtonParent>
          <ButtonParent direction="end">
            <NextPreviousButton
              title="Previous"
              onClick={undefined}
              btnNextCard={false}
              disabled={true}
            />
            {ticketsStateFinalAccount > 0 ? (
              <NextPreviousButton
                title="Next"
                onClick={nextCardModal}
                btnNextCard={true}
              />
            ) : (
              <NextPreviousButton
                title="Next"
                onClick={undefined}
                btnNextCard={true}
                disabled={true}
              />
            )}
          </ButtonParent>
        </NextPreviousButtonParent>
      </>
    );
  }
);

export default QuantityTicketsSelection;
