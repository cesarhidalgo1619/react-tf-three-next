// import Carta from './Carta'
// export default function Tablero(props) {

//     return (

//         <div className="tablero">
//             {
//                props.baraja
//                .map((carta, index) => {
//                  const estaSiendoComparada = props.parejaSeleccionada.indexOf(carta) > -1;
//                  return <Carta
//                    key={index} 
//                    icono={carta.icono}
//                    estaSiendoComparada={estaSiendoComparada}
//                    seleccionarCarta={() => props.seleccionarCarta(carta)}
//                    fueadivinada={carta.fueadivinada}
//                  />;
//                })
//             }



//             <style jsx>{`
// .tablero {
//     display: flex;
//     flex-wrap:wrap;
//     width: 700px;
//     height: 600px;
//     margin: 0 auto;
//     justify-content: space-around;
//   }
//     `}</style>
//         </div>

//     )
// }
import React, { Component } from 'react';
import Carta from './Carta'
export default class Tablero extends Component {
  render() {
    return (
      <div className="flex flex-wrap mt-0 m-auto justify-around">
        {
          this.props.baraja
            .map((carta, index) => {
              const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;
              return <Carta
                key={index} 
                icono={carta.icono}
                estaSiendoComparada={estaSiendoComparada}
                seleccionarCarta={() => this.props.seleccionarCarta(carta)}
                fueAdivinada={carta.fueAdivinada}
              />;
            })
        }
         {/* <style jsx>{`
.tablero {
    display: flex;
    flex-wrap:wrap;
    width: 200px;
    height: 300px;
    margin: 0 auto;
    justify-content: space-around;
  }
    `}</style> */}
      </div>
    ); 
  }
};

           