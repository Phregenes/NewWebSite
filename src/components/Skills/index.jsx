import React from "react";
import "./styles.css";

import Html from "../../assets/img/html.svg";
import Css from "../../assets/img/css.svg";
import Js from "../../assets/img/js.svg";
import ReactLogo from "../../assets/img/react.svg";

import { data } from "./data.js";

const Skills = ({ mousePosition }) => {
  return (
    <div className="teste">
      <div className="skills__presentation">
        <div className="skills__presentation-content">
          <span
            className="skills__presentation-figure"
            role="img"
            aria-label="emoji de uma pessoa com seu computador"
          >
            👨🏼‍💻
          </span>
          <h1 className="skills__presentation-h1">
            Sou um desenvolvedor que busca ser criativo e focado em estética.
            Trabalho criando coisas para a internet utilizando as seguintes
            tecnologias:
          </h1>
        </div>
      </div>

      {data.map((skill) => (
        <section key={skill.id} className="skills__section">
          <div className="skills__content">
            <figure
              className={`skills skills__${skill.title.toLowerCase()}`}
              style={{ width: `${mousePosition}px` }} // Não sei de onde vem o mousePosition, certifique-se de defini-lo antes de usar aqui
            >
              <img
                className="skills__image"
                src={skill.img}
                alt={`logo do ${skill.title} que contém um 5 da cor laranja`}
              />
            </figure>
            <div className="skills__text">
              <h1 className="skills__text-h1">{skill.title}</h1>
              <span className="skills__text-span">{skill.description}</span>
              <a
                className="skills__text-href"
                href={`https://pt.wikipedia.org/wiki/${skill.title}`}
              >
                Mais detalhes sobre {skill.title}
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
export default Skills;
