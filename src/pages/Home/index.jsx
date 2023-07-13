import React, { useState } from "react";
import "./styles.css";

import Typewriter from "../../components/Typewriter";
import Barcontact from "../../components/Barcontact";
import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";

import Octagon from "../../assets/img/octagon.png";
import Skills from '../../components/Skills';

const Home = () => {

  const [mousePosition, setMousePosition] = useState(200);

  function handleMouseMove(event) {
    const maxClientX = window.innerWidth;
    const invertedX = maxClientX - event.clientX;
    setMousePosition(invertedX);
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <Navigation />
      <section id="about" className="home__presentation">
        <Typewriter />
        <div className="home__octagon-conteiner">
          <img alt="octagon" className="home__octagon" src={Octagon} />
        </div>
      </section>

      <section id="skills">
        <Skills mousePosition={mousePosition}/>
      </section>

      <section id="gallery" className="home__gallery">
        <Gallery />
      </section>

      <section id="contact" className="home__contact">
        <Barcontact />
      </section>
    </div>
  );
};

export default Home;
