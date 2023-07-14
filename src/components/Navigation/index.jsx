import React, { useState, useEffect } from "react";
import "./styles.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <ul>
        <li>
          <a className="navigation__a" href="#about">Sobre</a>
        </li>
        <li>
          <a className="navigation__a" href="#skills">Tecnologias</a>
        </li>
        <li>
          <a className="navigation__a" href="#gallery">Galeria</a>
        </li>
        <li>
          <a className="navigation__a" href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;