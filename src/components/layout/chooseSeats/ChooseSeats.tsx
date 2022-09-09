import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ChairButton from "../../UI/chairButton/ChairButton";
import Heading from "../../UI/heading/Heading";
import { HomeContainerStyles2 } from "../home/Home.style";
import { ButtonParent } from "../../UI/button/Button.style";
import {
  ChairsContainer,
  ChairsDescriptionsColors,
  ChairsTvContainer,
  DescriptionsColors,
  ErrorMaxSeats,
  NumberSelectedSeatsStyle,
  Pcontainer,
} from "./ChooseSeats.style";
import { NextPreviousButtonParent } from "../../UI/button/NextPreviousButtonParent";
import NextPreviousButton from "../../UI/button/NextPreviousButton";
import { ALL_SEATES } from "../../../grapql/querys";
import { useCustomHookGetData } from "../../../hooks/use-custom-hook-getData";
import {
  getAnimationObj,
  getInitialAnimationObj,
} from "../../../animation/animation";
import { SeatObjDataTypes } from "../../../types/Seats";

///// finalNumberTickets: Partial<AccountStateTypes>;

interface ChooseSeatsProps {
  finalNumberTickets: number;
  previousCardModal: () => void;
  nextCardModal: () => void;
  seatsSelected: SeatObjDataTypes[] | [];
  setSeatsSelectedOnNextpage: (
    seatsSelectedOnNextpage: SeatObjDataTypes[]
  ) => void;
  numberSelectedSeats: number;
  setNumberSelectedSeats: (prop: number) => void;
}

const fakeDescriptionColorsDataArray: SeatObjDataTypes[] = [
  {
    id: "available",
    name: "Available",
    status: "available",
    checked: false,
  },
  {
    id: "selected",
    name: "Selected",
    status: "selected",
    checked: true,
  },
  {
    id: "taken",
    name: "Taken",
    status: "taken",
    checked: true,
  },
];

const ChooseSeats = React.forwardRef(
  (
    {
      finalNumberTickets,
      setSeatsSelectedOnNextpage,
      seatsSelected,
      previousCardModal,
      nextCardModal,
      numberSelectedSeats,
      setNumberSelectedSeats,
    }: ChooseSeatsProps,
    ref: any
  ) => {
    const [data] = useCustomHookGetData(ALL_SEATES);

    useEffect(() => {
      if (data?.allSeats === undefined) return;
      if (seatsSelected.length > 0) return;

      setSeatsSelectedOnNextpage(data.allSeats);
    }, [data]);

    const setAllSelectedSeats = (updatedArray: SeatObjDataTypes[] | []) => {
      const newArray = updatedArray.concat();

      const arraySelectedSeats = newArray.filter((seat) => {
        return seat.status === "selected";
      });

      setNumberSelectedSeats(arraySelectedSeats.length);
    };

    const handleOnChangeCheckboxButton = (id: string) => {
      const newArray = seatsSelected.concat();
      const indexItem = seatsSelected.findIndex((item) => item.id === id);
      let newItem = { ...newArray[indexItem] };
      newItem.checked = !newItem.checked;
      newItem.status = newItem.checked === true ? "selected" : "available";
      let updatedArray = [...newArray];
      updatedArray[indexItem] = newItem;

      setAllSelectedSeats(updatedArray);
      setSeatsSelectedOnNextpage(updatedArray);
    };

    const handleOnChangeCheckboxButtonTest = () => {
      return null;
    };

    useLayoutEffect(() => {
      const animation1 = gsap.fromTo(
        ref.current,
        getAnimationObj({
          positiveTranslateX: true,
        }),
        getInitialAnimationObj({})
      );

      return () => {
        animation1.kill();
      };
    }, []);

    const isNumberSelectedSeats = numberSelectedSeats === finalNumberTickets;

    return (
      <>
        <HomeContainerStyles2 ref={ref}>
          <div>
            <Heading renderAs="span" theme="secondary">
              Choose your Seats:
            </Heading>
          </div>

          <div>
            <Pcontainer>
              You have selected
              <NumberSelectedSeatsStyle
                error={numberSelectedSeats > finalNumberTickets}
              >
                {numberSelectedSeats}
              </NumberSelectedSeatsStyle>
              seats of
              <span>{finalNumberTickets}</span>
              tickets
            </Pcontainer>

            {numberSelectedSeats > finalNumberTickets && (
              <ErrorMaxSeats>
                The number of selected seats exceeds the number of tickets
              </ErrorMaxSeats>
            )}
          </div>

          <ChairsContainer>
            <>
              {seatsSelected.map((seat) => (
                <ChairButton
                  key={seat.id}
                  id={seat.id}
                  status={seat.status}
                  name={seat.name}
                  onClick={handleOnChangeCheckboxButton}
                  checked={seat.checked}
                  disabled={seat.status === "taken"}
                  allDisabled={false}
                />
              ))}
              <ChairsTvContainer>Screen</ChairsTvContainer>
            </>
          </ChairsContainer>

          <ChairsDescriptionsColors>
            {fakeDescriptionColorsDataArray.map((seat) => (
              <DescriptionsColors key={seat.id}>
                <span>{seat.name}:</span>
                <ChairButton
                  id={seat.id}
                  status={seat.status}
                  name={seat.name}
                  onClick={handleOnChangeCheckboxButtonTest}
                  checked={seat.checked}
                  disabled={true}
                  allDisabled={false}
                />
              </DescriptionsColors>
            ))}
          </ChairsDescriptionsColors>
        </HomeContainerStyles2>

        <NextPreviousButtonParent>
          <ButtonParent direction="space-between">
            <NextPreviousButton
              title="Previous"
              onClick={previousCardModal}
              btnNextCard={false}
            />

            {isNumberSelectedSeats ? (
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

export default ChooseSeats;
