import React from "react";
import "./styles.css";

import Html from "../../assets/img/html.svg";
import Css from "../../assets/img/css.svg";
import Js from "../../assets/img/js.svg";
import ReactLogo from "../../assets/img/react.svg";

const Skills = ({ mousePosition }) => {

  return (
    <div className="teste">
      <div className="skills__presentation">
        <div className="skills__presentation-content">
          <span className="skills__presentation-figure" role="img" aria-label="emoji de uma pessoa com seu computador">
          👨🏼‍💻
          </span>
          <h1 className="skills__presentation-h1">
            Sou um desenvolvedor que busca ser criativo e focado em estética.
            Trabalho criando coisas para a internet utilizando as seguintes
            tecnologias:
          </h1>
        </div>
      </div>
      <div className="skills__container">
        <div className="skills__content">
          <figure
            className="skills skills__html"
            style={{ width: `${mousePosition}px` }}
          >
            <img
              className="skills__image"
              src={Html}
              alt="logo do html que contem um 5 da cor laranga"
            />
          </figure>
          <div className="skills__text">
            <h1 className="skills__text-h1">HTML</h1>
            <span className="skills__text-span">
              O HyperText Markup Language, conhecido como HTML, é a linguagem de
              marcação padrão para a criação de documentos destinados a serem
              exibidos em um navegador da web. Ele pode ser complementado por
              tecnologias como Cascading Style Sheets (CSS) e linguagens de
              script, como JavaScript.
            </span>
            <a
              className="skills__text-href"
              href="https://pt.wikipedia.org/wiki/HTML"
            >
              Mais detalhes sobre HTML
            </a>
          </div>
        </div>
      </div>

      <div className="skills__container">
        <div className="skills__content">
          <figure
            className="skills skills__css"
            style={{ width: `${mousePosition}px` }}
          >
            <img
              className="skills__image"
              src={Css}
              alt="logo da tecnologia css que contem um 3 e que tem a cor azul"
            />
          </figure>
          <div className="skills__text">
            <h1 className="skills__text-h1">CSS</h1>
            <span className="skills__text-span">
              Cascading Style Sheets (CSS) é uma linguagem de estilo utilizada
              para descrever a apresentação de um documento escrito em uma
              linguagem de marcação, como HTML ou XML (incluindo dialetos XML
              como SVG, MathML ou XHTML).
            </span>
            <a
              className="skills__text-href"
              href="https://pt.wikipedia.org/wiki/CSS"
            >
              Mais detalhes sobre CSS
            </a>
          </div>
        </div>
      </div>

      <div className="skills__container">
        <div className="skills__content">
          <figure
            className="skills skills__js"
            style={{ width: `${mousePosition}px` }}
          >
            <img
              className="skills__image"
              src={Js}
              alt="logo da tecnologia javascript que contem as iniciais JS da cor amarela"
            />
          </figure>
          <div className="skills__text">
            <h1 className="skills__text-h1">JavaScript</h1>
            <span className="skills__text-span">
              JavaScript, frequentemente abreviado como JS, é uma linguagem de
              programação que se destaca como uma das principais tecnologias da
              World Wide Web, juntamente com HTML e CSS. A partir de 2022,
              aproximadamente 98% dos sites utilizam JavaScript no lado do
              cliente para controlar o comportamento das páginas da web, muitas
              vezes incorporando bibliotecas de terceiros.
            </span>
            <a
              className="skills__text-href"
              href="https://pt.wikipedia.org/wiki/JavaScript"
            >
              Mais detalhes sobre JavaScript
            </a>
          </div>
        </div>
      </div>

      <div className="skills__container">
        <div className="skills__content">
          <figure
            className="skills skills__react"
            style={{ width: `${mousePosition}px` }}
          >
            <img
              className="skills__image"
              src={ReactLogo}
              alt="logo do react Js que parece ser uma estrela"
            />
          </figure>
          <div className="skills__text">
            <h1 className="skills__text-h1">React JS</h1>
            <span className="skills__text-span">
              O React.js é uma biblioteca JavaScript para construir interfaces
              de usuário interativas e reativas. Ele usa componentes
              reutilizáveis e oferece um desempenho rápido e escalável para
              desenvolvimento web moderno.
            </span>
            <a
              className="skills__text-href"
              href="https://pt.wikipedia.org/wiki/React_(JavaScript)"
            >
              Mais detalhes sobre React
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
