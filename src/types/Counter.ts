export enum CountActionKind {
  ADULT_TICKETS_INCREMENT = "ADULT_TICKETS_INCREMENT",
  ADULT_TICKETS_DECREMENT = "ADULT_TICKETS_DECREMENT",
  CHILDREN_TICKETS_INCREMENT = "CHILDREN_TICKETS_INCREMENT",
  CHILDREN_TICKETS_DECREMENT = "CHILDREN_TICKETS_DECREMENT",
}
export interface AccountStateTypes {
  childrenAccount: number;
  adultAccount: number;
  finalAccount: number;
  numberAdultTickets: number;
  numberChildrenTickets: number;
  finalNumberTickets: number;
}

export type AccountActions =
  | { type: "FINAL_ACCOUNT" }
  | { type: "FINAL_NUMBER_TICKETS" }
  | { type: CountActionKind.ADULT_TICKETS_INCREMENT }
  | { type: CountActionKind.ADULT_TICKETS_DECREMENT }
  | { type: CountActionKind.CHILDREN_TICKETS_INCREMENT }
  | { type: CountActionKind.CHILDREN_TICKETS_DECREMENT };
