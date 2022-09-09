import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useCustomHookGetData } from "../../../hooks/use-custom-hook-getData";
import Card from "../../UI/card/Card";
import {
  HomeContainerStyles,
  HomeStyles,
  HomeStylesElementBg,
} from "./Home.style";
import { ALL_MOVIES } from "../../../grapql/querys";
import SwiperContainer from "../../UI/swiper/Swiper";
import "swiper/css";
import {
  getAnimationObj,
  getInitialAnimationObj,
} from "../../../animation/animation";
import Heading from "../../UI/heading/Heading";
import Modal from "../../UI/modal/Modal";
import useModal from "../../../hooks/use-modal";
import useCounterTickets from "../../../hooks/use-counter-tickets";
import { MoviesTypes, MOVIE_TICKET_PRICE } from "../../../types/MoviesTickets";
import ChooseSeats from "../chooseSeats/ChooseSeats";
import QuantityTicketsSelection from "../QuantityTicketsSelection/QuantityTicketsSelection";
import ContainerSections from "../container/ContainerSections";
import PaymentSection from "../paymentSection/PaymentSection";
import useAverageColor from "../../../hooks/use-average-color";
import { SeatObjDataTypes } from "../../../types/Seats";
import SkeletonCard from "../../UI/card/SkeletonCard";
import {
  ContainerLoading,
  SkeletonContainerStyle,
} from "../../UI/card/Card.style";

const Home = () => {
  const [data, loading] = useCustomHookGetData(ALL_MOVIES);
  const [movies, setMovies] = useState<MoviesTypes[] | []>([]);
  const [ticketsState, dispatchTicketsState] = useCounterTickets();
  const [hourSelected, setHourSelected] = useState<string>("");
  const [dateSelected, setDateSelected] = useState<{} | null>(null);
  const [seatsSelected, setSeatsSelected] = useState<SeatObjDataTypes[] | []>(
    []
  );
  const [numberSelectedSeats, setNumberSelectedSeats] = useState(0);
  const [isQntyTicketsSelection, setIsQntyTicketsSelection] = useState(true);
  const [isLoadingTestActive, setIsLoadingTestActive] = useState(true);
  const [isChooseSeatsActive, setIsChooseSeatsActive] = useState(false);
  const [isPaymentSectionActive, setIsPaymentSectionActive] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<MoviesTypes | null>(null);
  const [currentIndexCard, setCurrentIndexCard] = useState<number | null>(null);
  const [currentColor, imgsArrayRef] = useAverageColor(currentIndexCard);
  const [isModalActive, openModal, closeModal, onMouseDownModal, modalRef] =
    useModal();
  const qntyTicketsSelectionRef = useRef<any>(null);
  const chooseSeatsRef = useRef<any>(null);
  const paymentSectionRef = useRef<any>(null);

  gsap.registerPlugin(Flip);

  useEffect(() => {
    if (data === undefined) return;

    setMovies(data.allMovies);
  }, [data]);

  useEffect(() => {
    if (currentIndexCard === null) return;

    setCurrentMovie(movies[currentIndexCard]);
  }, [currentIndexCard]);

  useEffect(() => {
    if (loading) return;

    const timeout = setTimeout(() => {
      setIsLoadingTestActive(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  const handleCardOnClick = () => {
    openModal();
  };

  const checkIfIsCurrentMovie = (id: number): boolean => {
    return id === currentMovie?.id;
  };

  const handleOnChangeRadioButton = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHourSelected(e?.target.value);
  };

  const setSeatsSelectedOnNextpage = (
    seatsSelectedOnNextpage: SeatObjDataTypes[]
  ) => {
    setSeatsSelected(seatsSelectedOnNextpage);
  };

  const handleOnDatePickerChange = (date: {}) => {
    setDateSelected(date);
  };

  const previousQntyTicketsSelectionCard = () => {
    const { x, y, scaleY, rotate, opacity } = getAnimationObj({
      positiveTranslateX: true,
    });

    gsap.to(chooseSeatsRef.current, {
      x,
      y,
      scaleY,
      rotate,
      opacity,
      onComplete: () => {
        setIsQntyTicketsSelection(true), setIsChooseSeatsActive(false);
      },
    });

    gsap.to(
      qntyTicketsSelectionRef.current,
      getAnimationObj({
        positiveTranslateX: true,
      })
    );
  };

  const chooseSeatsCardAnimation = ({ reverse }: { reverse: boolean }) => {
    if (reverse) {
      gsap.fromTo(
        chooseSeatsRef.current,
        getAnimationObj({
          positiveTranslateX: false,
        }),
        getInitialAnimationObj({})
      );
      return;
    }

    gsap.fromTo(
      chooseSeatsRef.current,
      getAnimationObj({
        positiveTranslateX: true,
      }),
      getInitialAnimationObj({})
    );
  };

  const previousChooseSeatsCard = () => {
    const { x, y, scaleY, rotate, opacity } = getAnimationObj({
      positiveTranslateX: true,
    });

    gsap.to(paymentSectionRef.current, {
      x,
      y,
      scaleY,
      rotate,
      opacity,
      onComplete: () => {
        setIsChooseSeatsActive(true),
          setIsPaymentSectionActive(false),
          chooseSeatsCardAnimation({ reverse: true });
      },
    });
  };

  const nextChooseSeatsCard = () => {
    const { x, y, scaleY, rotate, opacity } = getAnimationObj({
      positiveTranslateX: false,
    });

    gsap.to(qntyTicketsSelectionRef.current, {
      x,
      y,
      scaleY,
      rotate,
      opacity,
      onUpdate: () => {},
      onComplete: () => {
        setIsChooseSeatsActive(true);

        setIsQntyTicketsSelection(false);
        chooseSeatsCardAnimation({ reverse: false });
      },
    });
  };

  const {
    x: x2,
    y: y2,
    scaleY: scaleY2,
    rotate: rotate2,
    opacity: opacity2,
  } = getAnimationObj({
    positiveTranslateX: false,
  });

  const nextCardPayment = () => {
    gsap.to(chooseSeatsRef.current, {
      x: x2,
      y: y2,
      scaleY: scaleY2,
      rotate: rotate2,
      opacity: opacity2,
      onEnter: () => {},
      onComplete: () => {
        setIsChooseSeatsActive(false);
        setIsPaymentSectionActive(true);
      },
    });
  };

  console.log("import.meta.env", import.meta.env);

  if (isLoadingTestActive) {
    return (
      <HomeStyles>
        <ContainerLoading>
          {Array.from({ length: 6 }, (v, i) => {
            return <SkeletonCard key={`${i}Loading`} title="Loading" />;
          })}
        </ContainerLoading>
        <SkeletonContainerStyle>
          <Heading renderAs="h1">Loading...</Heading>
        </SkeletonContainerStyle>
      </HomeStyles>
    );
  }

  return (
    <HomeStyles>
      <HomeStylesElementBg bg={currentColor} />
      <SwiperContainer setCurrentIndexCard={setCurrentIndexCard}>
        {movies?.map((movie, index) => (
          <Card
            key={movie.id}
            ref={(el) => (imgsArrayRef.current[index] = el)}
            title={movie.title}
            active={checkIfIsCurrentMovie(movie.id)}
            imgRoute={movie.posterPath}
            onClick={handleCardOnClick}
          />
        ))}
      </SwiperContainer>

      <HomeContainerStyles>
        <Heading renderAs="h1">{currentMovie?.title}</Heading>

        <p>{currentMovie?.overview}</p>
      </HomeContainerStyles>

      <Modal
        isModalActive={isModalActive}
        closeModal={closeModal}
        onMouseDownModal={onMouseDownModal}
        modalRef={modalRef}
      >
        <ContainerSections>
          {isPaymentSectionActive && (
            <PaymentSection
              ref={paymentSectionRef}
              previousCardModal={previousChooseSeatsCard}
              currentMovie={currentMovie}
            />
          )}

          {isChooseSeatsActive && (
            <ChooseSeats
              ref={chooseSeatsRef}
              finalNumberTickets={ticketsState.finalNumberTickets}
              previousCardModal={previousQntyTicketsSelectionCard}
              nextCardModal={nextCardPayment}
              seatsSelected={seatsSelected}
              setSeatsSelectedOnNextpage={setSeatsSelectedOnNextpage}
              numberSelectedSeats={numberSelectedSeats}
              setNumberSelectedSeats={setNumberSelectedSeats}
            />
          )}

          {isQntyTicketsSelection && (
            <QuantityTicketsSelection
              ref={qntyTicketsSelectionRef}
              currentMovieTitle={currentMovie?.title}
              handleOnChangeRadioButton={handleOnChangeRadioButton}
              handleOnDatePickerChange={handleOnDatePickerChange}
              hourSelected={hourSelected}
              dateSelected={dateSelected}
              numberAdultTickets={ticketsState.numberAdultTickets}
              numberChildrenTickets={ticketsState.numberChildrenTickets}
              dispatchTicketsState={dispatchTicketsState}
              ticketsStateFinalAccount={ticketsState.finalAccount}
              currency={MOVIE_TICKET_PRICE.currency}
              nextCardModal={nextChooseSeatsCard}
            />
          )}
        </ContainerSections>
      </Modal>
    </HomeStyles>
  );
};

export default Home;
