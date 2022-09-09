import React from "react";
import ConfettiElement from "../../UI/confettiElement/ConfettiElement";
import Heading from "../../UI/heading/Heading";
import { HomeContainerStyles2 } from "../home/Home.style";
import { SuccessSectionStyle } from "./SuccessSection.style";

const SuccessSection = React.forwardRef(
  ({ data }: any | undefined | null, ref: any) => {
    if (data === undefined) return null;

    const [{ addUserData }, { addMovieSelected }] = data.data;

    return (
      <HomeContainerStyles2 ref={ref}>
        <SuccessSectionStyle>
          <Heading>Congratulations!</Heading>
          <div>
            <span>
              Mr/Mrs {addUserData.fullName}, you have successfully purchased a
              ticket to the movie:
            </span>

            <span>{addMovieSelected.title}</span>
          </div>
        </SuccessSectionStyle>
        <ConfettiElement />
      </HomeContainerStyles2>
    );
  }
);

export default SuccessSection;
