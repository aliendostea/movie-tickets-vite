import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStyles, SwiperStylesTest } from "./Swiper.style";
import style from "./Swipper.modules.css";
import "swiper/css";

interface SwiperContainerTypes {
  setCurrentIndexCard: (props: number) => void;
  children: any;
}

const SwiperContainer = ({
  setCurrentIndexCard,
  children,
}: SwiperContainerTypes) => {
  const [isOnSlideChangeActive, setIsOnSlideChangeActive] = useState(false);

  useEffect(() => {
    if (isOnSlideChangeActive) return;

    setIsOnSlideChangeActive(true);
    setCurrentIndexCard(0);
  }, []);
  return (
    <SwiperStyles>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        centeredSlides={true}
        centeredSlidesBounds={true}
        grabCursor={true}
        slideToClickedSlide={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={style}
        onSlideChange={(e) => {
          setCurrentIndexCard(e.activeIndex);
          setIsOnSlideChangeActive(true);
        }}
      >
        {children?.map((card: any) => (
          <SwiperSlide key={card.key}>
            {({ isActive }) => {
              return <>{card}</>;
            }}
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <SwiperStylesTest>Slide 2</SwiperStylesTest>
        </SwiperSlide>
      </Swiper>
    </SwiperStyles>
  );
};

export default SwiperContainer;
