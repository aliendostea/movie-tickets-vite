import { HeadingPriceParent, HeadingPriceStyles } from "./Heading.style";

interface HeadingPriceTypes {
  title: number;
  currency: string;
}

const HeadingPrice = ({ title, currency }: HeadingPriceTypes) => {
  return (
    <HeadingPriceParent>
      <span>Total amount:</span>
      <HeadingPriceStyles>
        {title}
        {currency}
      </HeadingPriceStyles>
    </HeadingPriceParent>
  );
};

export default HeadingPrice;
