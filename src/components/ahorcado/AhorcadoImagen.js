import React from "react";
const inicio =  "/ahorcado/inicio.png";
const primer = "/ahorcado/primer-intento.png";
const segundo = "/ahorcado/segundo-intento.png";
const tercero = "/ahorcado/tercer-intento.png";
const cuarto = "/ahorcado/cuarto-intento.png";
const quinto = "/ahorcado/quinto-intento.png";
const perdiste = "/ahorcado/Perdiste.png";

const AhorcadoImagen = props => {
  switch (props.num) {
    case 1:
      return (
        <div className=" w-16 md:w-32 lg:w-48">
          <img src={quinto} alt="fallo 5" />
        </div>
      );
    case 2:
      return (
        <div className=" w-16 md:w-32 lg:w-48">
          <img src={cuarto} alt="fallo 4" />
        </div>
      );
    case 3:
      return (
        <div className=" w-16 md:w-32 lg:w-48">
          <img src={tercero} alt="fallo 3" />
        </div>
      );

    case 4:
      return (
        <div className=" w-16 md:w-32 lg:w-48">
          <img src={segundo} alt="fallo 2" />
        </div>
      );

    case 5:
      return (
        <div className=" w-16 md:w-32 lg:w-48">
          <img src={primer} alt="fallo 1" />
        </div>
      );

    case "pierde":
      return (
        <div className=" w-16 md:w-32 lg:w-48">
          <img src={perdiste} alt="pierde" />
        </div>
      );
    case "gana":
      return (
        <div className=" w-16 md:w-32 lg:w-48">
          <img src={inicio} alt="ganador" />
        </div>
      );

    default:
      return (
        <div className=" w-16 md:w-32 lg:w-48">
          <img src={inicio} alt="inicio" />
        </div>
      );
  }
};
export default AhorcadoImagen;
