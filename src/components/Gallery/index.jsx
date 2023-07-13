import React, { useState } from "react";
import { Button } from "antd";
import "./styles.css";

const Gallery = () => {
  const [activeSquare, setActiveSquare] = useState(null);

  const handleClick = (square) => {
    setActiveSquare((prevSquare) => (prevSquare === square ? null : square));
  };

  const titleDefault = (title, id) => {
    return (
      <>
        <h2 className="gallery__h2">{title}</h2>
        <Button onClick={() => handleClick(id)} type="dashed" ghost>
          {activeSquare === id ? "fechar" : "abrir"}
        </Button>
      </>
    );
  };

  const q1Content = () => {
    if (activeSquare === "q1" || activeSquare === null) {
      return titleDefault("Vida no interior", "q1");
    } else if (activeSquare === "q4") {
      return (
        <p className="gallery__description">
          Ao ingressar na área de desenvolvimento, acabei me encantando pelo
          front-end devido à minha afinidade com a parte criativa e estética das
          aplicações. Desde então, tenho buscado constantemente aprimorar meus
          conhecimentos e crescer profissionalmente nesse campo. Meu objetivo é
          sempre evoluir e superar desafios, oferecendo experiências incríveis
          por meio do design e da usabilidade das aplicações que desenvolvo.
        </p>
      );
    }
  };

  const q2Content = () => {
    if (activeSquare === "q1") {
      return <></>;
    } else if (activeSquare === "q2" || activeSquare === null) {
      return titleDefault("Mudança para SP", "q2");
    } else if (activeSquare === "q3") {
      return (
        <p className="gallery__description">
          Após migrar de área para ter mais tempo para estudar programação,
          comecei a trabalhar em um bar de vinhos durante a noite. Nesse
          ambiente, tive a oportunidade de aprender diversas outras funções e
          expandir meus conhecimentos.
        </p>
      );
    } else if (activeSquare === "q4") {
      return (
        <>
          <h3>Mudando para o interior</h3>
          <span>{activeSquare === "q1" ? "fechar" : "abrir"}</span>
        </>
      );
    }
  };

  const q3Content = () => {
    if (activeSquare === "q1") {
      return (
        <p className="gallery__description">
          Aos 13 anos, fiz uma mudança significativa em minha vida ao me mudar
          para o interior de São Paulo, mais especificamente para uma cidade
          chamada Igaratá. Essa mudança marcou o início de uma experiência de
          vida completamente diferente.
        </p>
      );
    } else if (activeSquare === "q2") {
      return (
        <p className="gallery__description">
          Após me mudar para São Paulo, comecei a trabalhar como limpador de
          carros para me sustentar nessa cidade. O ritmo era bastante intenso,
          pois eu era responsável por cuidar de vários veículos em diferentes
          lojas dentro de um shopping.
        </p>
      );
    } else if (activeSquare === "q3" || activeSquare === null) {
      return titleDefault("Criando um sonho", "q3");
    } else if (activeSquare === "q4") {
      return (
        <p className="gallery__description">
          Conquistei uma oportunidade em minha primeira empresa, a Arco
          Educação, onde fui desafiado a ajudar desenvolver um design system
          utilizando Storybook e TypeScript. Com o passar do tempo, expandi meu
          envolvimento para outros projetos na empresa. Atualmente, estou em
          busca de novos desafios para enfrentar e aprender muito.
        </p>
      );
    }
  };

  const q4Content = () => {
    if (activeSquare === "q1") {
      return (
        <p className="gallery__description">
          Durante 7 anos, tive o privilégio de viver em uma chácara afastada no
          interior, onde não havia acesso à internet Wi-Fi nem rede 3G. Sempre
          que desejava me conectar, precisava percorrer uma caminhada de uma
          hora até o centro da cidade mais próxima.
        </p>
      );
    } else if (activeSquare === "q2") {
      return (
        <p className="gallery__description">
          Depois de um tempo trabalhando, fui promovido para o cargo de
          Responsável Técnico, também conhecido como "correria". Nessa posição,
          eu era responsável por realizar todas as funções necessárias para
          manter os veículos em perfeitas condições.
        </p>
      );
    } else if (activeSquare === "q3") {
      return (
        <p className="gallery__description">
          Ao me envolver mais no dia a dia do bar, despertei interesse pelo
          mundo dos vinhos e decidi fazer um curso para aprofundar meus
          conhecimentos nesse universo rico. Essa iniciativa permitiu-me
          oferecer um atendimento de maior qualidade, proporcionando aos
          clientes uma experiência ainda mais gratificante.
        </p>
      );
    } else if (activeSquare === "q4" || activeSquare === null) {
      return titleDefault("Codando o futuro", "q4");
    }
  };

  return (
    <div className="gallery">
      <h3 className="gallery__title">Galeria</h3>
      <div className="quadrado-grande">
        <div className={`quadrado q1 ${activeSquare === "q1" ? "ativo" : ""}`}>
          {q1Content()}
        </div>
        <div className={`quadrado q2 ${activeSquare === "q2" ? "ativo" : ""}`}>
          {q2Content()}
        </div>
        <div className={`quadrado q3 ${activeSquare === "q3" ? "ativo" : ""}`}>
          {q3Content()}
        </div>
        <div className={`quadrado q4 ${activeSquare === "q4" ? "ativo" : ""}`}>
          {q4Content()}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
