import React, { useState, useEffect } from "react";

import { Container } from "./styles";

const scrollThershold = 300

const SiderMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false)
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = [
    isActive ? 'open': '',
    scrollY <= scrollThershold ? 'scrollOpen': ''
  ]

  const classesName = classes.join(' ').trim()

  return <Container className={classesName}>{children}</Container>;
};

export default SiderMenu;
