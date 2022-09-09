import { ButtonStyles } from "./Button.style";

interface ButtonTypes {
  onClick?: () => void | undefined;
  title: string | undefined | null;
  link?: boolean | undefined;
  type?: "submit" | "button" | "reset" | undefined;
}

const Button = ({ onClick, title, type }: ButtonTypes) => {
  return (
    <ButtonStyles onClick={onClick} type={type}>
      {title}
    </ButtonStyles>
  );
};

export default Button;
