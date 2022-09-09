import { HeadingStyles } from "./Heading.style";

interface HeadingTypes {
  children: never | string | undefined;
  renderAs: string;
  theme: string;
  color: string;
}

const Heading = ({ children, renderAs, theme, color }: any) => {
  return (
    <HeadingStyles as={renderAs} theme={theme} color={color}>
      {children}
    </HeadingStyles>
  );
};

export default Heading;
