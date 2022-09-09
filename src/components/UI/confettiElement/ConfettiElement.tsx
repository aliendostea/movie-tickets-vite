import { useEffect, useState } from "react";
import { ConfettiElementStyle } from "./ConfettiElement.style";

const ConfettiElement = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(false);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isActive) {
    return (
      <ConfettiElementStyle>
        <img
          src={`${import.meta.env.VITE_APP_REACT_URL}/confetti2.gif`}
          alt=""
        />
      </ConfettiElementStyle>
    );
  }

  return null;
};

export default ConfettiElement;
