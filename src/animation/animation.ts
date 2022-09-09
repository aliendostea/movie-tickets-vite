const getAnimationObj = ({
  positiveTranslateX,
}: {
  positiveTranslateX: boolean;
}) => {
  let translateX = 150;

  if (positiveTranslateX === false) translateX = -150;

  return {
    x: translateX,
    y: -15,
    scaleY: 0.91,
    rotate: 0,
    opacity: 0,
  };
};

const getInitialAnimationObj = ({ delay = 0 }: { delay?: number }) => {
  return {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    duration: 2.8,
    delay: delay,
    ease: "elastic",
  };
};

export { getAnimationObj, getInitialAnimationObj };
