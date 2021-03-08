
// import FlipCard from 'react-flipcard-2';

// export default function Carta(props) {

//   return (
//     <div className="carta" onClick={props.seleccionarCarta}>
//       <FlipCard
//         flipped={props.estaSiendoComparada || props.fueAdivinada}
//         disabled={true}>
//         <div className="portada"></div>

//         <div className="contenido"><img src={props.icono} /> </div>
//       </FlipCard>

//       <style jsx>{`
// .carta {
//     width: 125px;
//     height: 125px;
//     background: black;
//   }
  
//   .portada {
//     width: 125px;
//     height: 125px;
    
//   }
  
//   .contenido {
//     width: 125px;
//     height: 125px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgb(3, 220, 244);
//   }
  
//   .ReactFlipCard {
//     width: 100%;
//     height: 100%;
//   }
//     `}</style>
//     </div>

//   )
// }
// ***************************************************2 comment//
// import React, {Component} from 'react';
// import FlipCard from 'react-flipcard-2';

// export default class Carta extends Component {
//   render() {
//     return (
//       <div className="carta" onClick={this.props.seleccionarCarta}>
//         <FlipCard
//           flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
//           disabled={true}
//         >
//           <div className="portada"></div>
//           <div className="contenido">
//           <img src={this.props.icono} />
//           </div>
//         </FlipCard>
//         <style jsx>{`
// .carta {
//     width: 125px;
//     height: 125px;
//     background-color: #ffb300;
//   }
  
//   .portada {
//     width: 125px;
//     height: 125px;
    
//   }
  
//   .contenido {
//     width: 125px;
//     height: 125px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgb(3, 220, 244);
//   }
  
//   .ReactFlipCard {
//     width: 100%;
//     height: 100%;
//   }
//     `}</style>
//       </div>
//     )
//   }  
// };

import React, {Component} from 'react';

import ReactCardFlip from "react-card-flip";

export default class Carta extends Component {  
  render() {
    return (
      <div className="w-11 h-11  lg:w-20 lg:h-20 mt-1 mr-2  bg-green-500" onClick={this.props.seleccionarCarta}>
        <ReactCardFlip
          isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
        >
          <div className="portada" key="front"></div>
          <div className="contenido" key="back">
          <img src={this.props.icono} />
          </div>
        </ReactCardFlip>
        <style jsx>{`  
  .ReactFlipCard {
    width: auto;
    height: auto;
  }
    `}</style>
      </div>
    )
  }  
};
