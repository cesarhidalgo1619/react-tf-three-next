import React from 'react';
import AhorcadoImagen from './AhorcadoImagen';

const Ahorcado_Results = props => {
  switch (props.resultado) {

    case 'gana':
      return (
        <main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">¡Felicidades!</h1>
            <div className="bg-green-600 shadow-lg rounded p-3">
              <div className="group relative">
                <AhorcadoImagen num="gana" />
                <div className="absolute bg-black rounded bg-opacity-0  w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg"> Haz completado el juego ¡Gracias por jugar!</h3>
                <p className="text-whit">Tu puntaje final: {props.score}</p>
              </div>
            </div>
            <div className="inline-block mr-2 mt-2">
              <button
                type="button"
                id="btnGenerar"
                onClick={props.reiniciarJuego}
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg"
              >
                Volver a jugar
            </button>
            </div>
          </div>
        </main>
      );

    case 'pierde':
      return (
        <main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Te Ahorcaron</h1>
            <div className="bg-red-600 shadow-lg rounded p-3">
              <div className="group relative">
                <AhorcadoImagen num="pierde" />
                <div className="absolute bg-black rounded bg-opacity-0  w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg">Perdiste</h3>
                <p className="text-whit">Tu puntaje final: {props.score}</p>
              </div>
            </div>
            <div className="inline-block mr-2 mt-2">
              <button
                type="button"
                id="btnGenerar"
                onClick={props.reiniciarJuego}
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg"
              >
                Reiniciar
            </button>
            </div>
          </div>
        </main>


      );

    default:
  }
};
export default Ahorcado_Results;
