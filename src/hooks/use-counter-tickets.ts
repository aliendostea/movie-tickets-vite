import { useEffect, useReducer } from "react";
import {
  AccountActions,
  AccountStateTypes,
  CountActionKind,
} from "../types/Counter";
import { MOVIE_TICKET_PRICE } from "../types/MoviesTickets";

const initialAccountState: AccountStateTypes = {
  childrenAccount: 0,
  adultAccount: 0,
  finalAccount: 0,
  numberAdultTickets: 0,
  numberChildrenTickets: 0,
  finalNumberTickets: 0,
};

function sumFunc(state: number): number {
  return state + 1;
}

function subtractFunc(state: number): number {
  return state - 1;
}

const accountReducer = (state: AccountStateTypes, action: AccountActions) => {
  const { numberAdultTickets, numberChildrenTickets } = state;
  const { type } = action;

  ////// NOOOO EDITAR EL STATE DIRECTAMENTE!!!!

  switch (type) {
    case "FINAL_NUMBER_TICKETS":
      return {
        ...state,
        finalNumberTickets: numberAdultTickets + numberChildrenTickets,
      };
    case "FINAL_ACCOUNT":
      return {
        ...state,
        finalAccount:
          MOVIE_TICKET_PRICE.adult * numberAdultTickets +
          MOVIE_TICKET_PRICE.children * numberChildrenTickets,
      };
    case CountActionKind.ADULT_TICKETS_INCREMENT:
      return {
        ...state,
        numberAdultTickets: sumFunc(numberAdultTickets),
      };
    case CountActionKind.ADULT_TICKETS_DECREMENT:
      return {
        ...state,
        numberAdultTickets: subtractFunc(numberAdultTickets),
      };
    case CountActionKind.CHILDREN_TICKETS_INCREMENT:
      return {
        ...state,
        numberChildrenTickets: sumFunc(numberChildrenTickets),
      };
    case CountActionKind.CHILDREN_TICKETS_DECREMENT:
      return {
        ...state,
        numberChildrenTickets: subtractFunc(numberChildrenTickets),
      };
  }
};
const useCounterTickets = () => {
  const [ticketsState, dispatchTicketsState] = useReducer(
    accountReducer,
    initialAccountState
  );

  useEffect(() => {
    dispatchTicketsState({ type: "FINAL_ACCOUNT" });
    dispatchTicketsState({ type: "FINAL_NUMBER_TICKETS" });
  }, [ticketsState.numberAdultTickets, ticketsState.numberChildrenTickets]);

  return [ticketsState, dispatchTicketsState] as const;
};

export default useCounterTickets;
