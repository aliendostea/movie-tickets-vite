import React from "react";
import Button from "../button/Button";
import { CardStyles } from "./Card.style";

interface CardTypes {
  title: string;
  imgRoute: string;
  active: boolean;
  opacity?: string;
  onClick?: () => void;
}

const Card = React.forwardRef(
  (
    { title, onClick, imgRoute, opacity = "1", active = false }: CardTypes,
    ref: React.LegacyRef<HTMLImageElement> | undefined
  ) => {
    return (
      <CardStyles opacity={opacity} active={active}>
        <figure>
          <img
            ref={ref}
            src={`${import.meta.env.VITE_APP_REACT_URL}${imgRoute}`}
            alt={title}
            loading="lazy"
          />
        </figure>
        <span> {title} </span>
        <Button title="Buy Tickets" onClick={onClick} />
      </CardStyles>
    );
  }
);

export default Card;
