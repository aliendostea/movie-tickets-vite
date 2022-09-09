import { useEffect, useState } from "react";
import { Header as NavHeader, HeaderParent } from "./Header.style";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const scrollFunction = () => {
      let windowPageYOffset = window.pageYOffset;

      setIsScrolling(false);

      if (windowPageYOffset < 10) return;

      setIsScrolling(true);
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <HeaderParent>
      <NavHeader bg={isScrolling}>
        <h1>MovieTickets</h1>
      </NavHeader>
    </HeaderParent>
  );
};

export default Header;
