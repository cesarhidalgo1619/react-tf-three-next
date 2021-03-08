
// import React, { Component } from 'react';


// export default class Header extends Component {
//   render() {
//     return (
//       <header> 
//         <div className="titulo">React-Memoria</div>
//           <div>
//             <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
//               Reiniciar
//             </button>
//         </div>
//         <div className="titulo">
//           Intentos: {this.props.numeroDeIntentos}
//         </div>
//         <style jsx>{`
// header {
//     height: 50px;
//     border: 1px solid black;
//     margin-bottom: 10px;
//     display: flex;
//     justify-content: space-between;;
//     align-content: center;
//   }

//   .titulo {
//     font-size: 25px;
//     padding: 10px;
//   }

//   .boton-reiniciar {
//     position: absolute;
//     left: 12px;
//     top: 58px;
//     background:white;
//   }

//     `}</style>
//       </header>
//     );
//   }
// };


import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <header >
        <div className="md:mr-5 sm:mr-5">
          <div className=" text-gray-900 leading-none">Memorama</div>
          <div className="   font-light text-true-gray-500 antialiased">Aprende mientras te diviertes</div>
          <div className="   font-light text-true-gray-500 antialiased">  Intentos: {this.props.numeroDeIntentos}</div>
         
          <button
        type="button"
        onClick={this.props.resetearPartida}
        class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        Reiniciar Partida
      </button>
        </div>
      </header>
    );
  }
};
