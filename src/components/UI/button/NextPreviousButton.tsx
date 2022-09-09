import { NextPreviousButtonStyles } from "./Button.style";

interface ButtonTypes {
  onClick?: () => void | undefined;
  title: string | undefined | null;
  link?: boolean | undefined;
  type?: "submit" | "button" | "reset" | undefined;
  btnNextCard: boolean;
  disabled?: boolean;
}

const NextPreviousButton = ({
  onClick,
  title,
  type = "button",
  btnNextCard,
  disabled,
}: ButtonTypes) => {
  return (
    <NextPreviousButtonStyles
      onClick={onClick}
      type={type}
      btnNextCard={btnNextCard}
      disabled={disabled}
    >
      {title}
    </NextPreviousButtonStyles>
  );
};

export default NextPreviousButton;
