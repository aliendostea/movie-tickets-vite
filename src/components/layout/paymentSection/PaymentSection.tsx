import React, { useEffect, useLayoutEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import gsap from "gsap";
import { useFormik } from "formik";
import { ADD_MOVIE_SELECTED, ADD_USER } from "../../../grapql/querys";
import { validationSchema } from "../../../validationSchema/validationSchema";
import Heading from "../../UI/heading/Heading";
import { HomeContainerStyles2 } from "../home/Home.style";
import { ButtonParent } from "../../UI/button/Button.style";
import { NextPreviousButtonParent } from "../../UI/button/NextPreviousButtonParent";
import NextPreviousButton from "../../UI/button/NextPreviousButton";
import Textfield from "../../UI/textField/Textfield";
import Form from "../../UI/form/Form";
import { BtnFormStyle, ErrorForm } from "../../UI/form/Form.style";
import {
  getAnimationObj,
  getInitialAnimationObj,
} from "../../../animation/animation";
import SuccessSection from "../successSection/SuccessSection";
import { MoviesTypes } from "../../../types/MoviesTickets";

interface PaymentSectionProps {
  previousCardModal: () => void;
  currentMovie: MoviesTypes | null;
}

const initialValues = {
  fullName: "",
  cardNumber: "",
  cvv: "",
};

const PaymentSection = React.forwardRef(
  ({ previousCardModal, currentMovie }: PaymentSectionProps, ref: any) => {
    const [isSubmittedData, setIsSubmittedData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [addUser, { data: dataUser, error }] = useMutation(ADD_USER);
    const [addMovie, { data: dataMovie }] = useMutation(ADD_MOVIE_SELECTED);

    const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
      useFormik({
        initialValues,
        onSubmit: (values) => {
          setIsLoading(true);

          addUser({
            variables: {
              id: `${values.fullName}${values.cardNumber}`, //// provisional ID must be UUID
              fullName: values.fullName,
              cardNumber: values.cardNumber,
              cvv: values.cvv,
            },
          });
          addMovie({
            variables: {
              movie: {
                id: currentMovie?.id,
                title: currentMovie?.title,
                posterPath: currentMovie?.posterPath,
              },
            },
          });
        },
        validationSchema,
      });

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

    useEffect(() => {
      if (dataUser === undefined) return;

      const timeout = setTimeout(() => {
        setIsSubmittedData(true);
        setIsLoading(isLoading);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }, [dataUser]);

    return (
      <>
        <HomeContainerStyles2 ref={ref}>
          {isSubmittedData === false && (
            <>
              <Heading renderAs="span" theme="secondary">
                Payment
              </Heading>
              <Form onSubmit={handleSubmit} aria-label="form">
                <Textfield
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={values.fullName}
                  placeholder="Your fullname"
                  label="Fullname"
                  error={errors?.fullName}
                  touched={touched.fullName}
                  fullWidth={true}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <Textfield
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  value={values.cardNumber}
                  placeholder="Card Number"
                  label="Card number"
                  onBlur={handleBlur}
                  touched={touched.cardNumber}
                  error={errors?.cardNumber}
                  onChange={handleChange}
                />

                <Textfield
                  id="cvv"
                  name="cvv"
                  type="text"
                  value={values.cvv}
                  placeholder="CVV"
                  label="CVV"
                  onBlur={handleBlur}
                  touched={touched.cvv}
                  error={errors?.cvv}
                  onChange={handleChange}
                />

                {error?.message && (
                  <ErrorForm>
                    Error en el Form, por favor revisa los datos introducidos
                  </ErrorForm>
                )}

                {isLoading === false && (
                  <BtnFormStyle title="Submit" type="submit" isLoading={false}>
                    Buy Ticktes
                  </BtnFormStyle>
                )}

                {isLoading && (
                  <BtnFormStyle
                    title="Submit"
                    type="button"
                    isLoading={isLoading}
                  >
                    Sending Ticktes
                  </BtnFormStyle>
                )}
              </Form>
            </>
          )}

          {isSubmittedData && (
            <SuccessSection ref={null} data={{ data: [dataUser, dataMovie] }} />
          )}
        </HomeContainerStyles2>

        {isSubmittedData === false && (
          <NextPreviousButtonParent>
            <ButtonParent direction="end">
              <NextPreviousButton
                title="Previous"
                onClick={previousCardModal}
                btnNextCard={false}
              />
            </ButtonParent>
          </NextPreviousButtonParent>
        )}
      </>
    );
  }
);

export default PaymentSection;
