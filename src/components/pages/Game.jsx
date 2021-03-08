// import React from 'react'
// import Header from '../memorama/Header';
// import Tablero from '../memorama/Tablero';
// import construirbaraja from '../../utils/ConstruirBaraja'
// const getestadoinicial=()=>{
// const baraja = construirbaraja();
// return{
//   baraja,
//   parejaSeleccionada:[],
//   estaComparando:false
// }
// }
// const state=getestadoinicial();
// const SeleccionarCarta = () => {
//     if (
//       state.estaComparando ||
//       state.parejaSeleccionada.indexOf(carta)>-1 ||
//       carta.fueadivinada
//     ) {
//       return;
//     }

//     const parejaSeleccionada = [...state.parejaSeleccionada, carta];
//    state.parejaSeleccionada = parejaSeleccionada
//   }
// const Dona = (props) => {


//   return (
//     <div>
//       <Header />
//       <Tablero 
//       baraja={state.baraja}
//       parejaSeleccionada={state.parejaSeleccionada}
//       SeleccionarCarta={(carta)=>SeleccionarCarta(carta)}/>
//     </div>


//   );


// }

// export default Dona;
import React from 'react';
import Ahorcado from '../ahorcado/AhorcadoBase';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from '../../../utilities';
import { useState, useRef, useEffect } from 'react';
import Boxtraductor from '../ui/Boxtraductor';

//Models ML
import * as fp from 'fingerpose';
const A = '/Alfanumerico/A.png';
const B = '/Alfanumerico/B.png';
const C = '/Alfanumerico/C.png';
const D = '/Alfanumerico/D.png';
const E = '/Alfanumerico/E.png';
const F = '/Alfanumerico/F.png';
const G = '/Alfanumerico/G.png';
const H = '/Alfanumerico/H.png';
const I = '/Alfanumerico/I.png';
const J = '/Alfanumerico/J.png';
const K = '/Alfanumerico/K.png';
const L = '/Alfanumerico/L.png';
const M = '/Alfanumerico/M.png';
const N = '/Alfanumerico/N.png';
const O = '/Alfanumerico/O.png';
const P = '/Alfanumerico/P.png';
const Q = '/Alfanumerico/Q.png';
const R = '/Alfanumerico/R.png';
const S = '/Alfanumerico/S.png';
const T = '/Alfanumerico/T.png';
const U = '/Alfanumerico/U.png';
const V = '/Alfanumerico/V.png';
const W = '/Alfanumerico/W.png';
const X = '/Alfanumerico/X.png';
const Y = '/Alfanumerico/Y.png';
const Z = '/Alfanumerico/Z.png';
const Space = '/Alfanumerico/Space.png'

import {
  Letter_A,
  Letter_B,
  Letter_C,
  Letter_D,
  Letter_E,
  Letter_F,
  Letter_G,
  Letter_H,
  Letter_I,
  Letter_J,
  Letter_K,
  Letter_L,
  Letter_M,
  Letter_N,
  Letter_O,
  Letter_P,
  Letter_Q,
  Letter_R,
  Letter_S,
  Letter_T,
  Letter_U,
  Letter_V,
  Letter_W,
  Letter_X,
  Letter_Y,
  Letter_Z,
  _
} from '../../../ABC';


const Game = () => {
  //ML
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState("");

  // export let texto = traduccion;

  const images = {
    A: A,
    B: B,
    C: C,
    D: D,
    E: E,
    F: F,
    G: G,
    H: H,
    I: I,
    J: J,
    K: K,
    L: L,
    M: M,
    N: N,
    O: O,
    P: P,
    Q: Q,
    R: R,
    S: S,
    T: T,
    U: U,
    V: V,
    W: W,
    X: X,
    Y: Y,
    Z: Z,
    _: _

  };
  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
    // console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 3000);
  };

  const detect = async net => {
    // Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          Letter_A,
          Letter_B,
          Letter_C,
          Letter_D,
          Letter_E,
          Letter_F,
          Letter_G,
          Letter_H,
          Letter_I,
          Letter_J,
          Letter_K,
          Letter_L,
          Letter_M,
          Letter_N,
          Letter_O,
          Letter_P,
          Letter_Q,
          Letter_R,
          Letter_S,
          Letter_T,
          Letter_U,
          Letter_V,
          Letter_W,
          Letter_X,
          Letter_Y,
          Letter_Z,
          _
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 6.5);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // console.log(gesture.gestures);

          const confidence = gesture.gestures.map(prediction => prediction.confidence);
          const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence));

          setEmoji(gesture.gestures[maxConfidence].name);
          // console.log(emoji);
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext('2d');
      drawHand(hand, ctx);
    }
  };




  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="grid  grid-cols-2 gap-x-4" >
      <div>
        <Ahorcado 
        emoji={emoji}/>
      </div>

      <div className="bg-gradient-to-t from-indigo-200 to-blue-900">
      <div className="p-3 m-4 w-auto rounded-xl absolute">
                <Webcam
                  ref={webcamRef}
                  className="absolute ml-auto mr-auto left-0 right-0 text-center z-10 w-auto h-auto"
                  // style={{
                  //   position: 'absolute',
                  //   marginLeft: 'auto',
                  //   marginRight: 'auto',
                  //   left: 0,
                  //   right: 0,
                  //   textAlign: 'center',
                  //   zindex: 9,
                  //   width: 300,
                  //   height: 300,
                  // }}

                />
                <canvas
                  ref={canvasRef}
                  className="relative ml-auto mr-auto left-0 right-0 text-center z-10 w-auto h-auto"
                  // style={{
                  //   position: 'relative',
                  //   marginLeft: 'auto',
                  //   marginRight: 'auto',
                  //   left: 0,
                  //   right: 0,
                  //   textAlign: 'center',
                  //   zindex: 9,
                  //   width: 200,
                  //   height: 200,
                  // }}
                />
              </div>
      </div>
    </div>

  )
}
export default Game;
