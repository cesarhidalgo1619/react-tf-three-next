//ML
import * as ts from '@tensorflow/tfjs';
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


const Fingerpose = () => {
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
  //End ML
  return (
    // <div>

    //   <div className="grid lg:grid-cols-2 sm:grid-cols-1">

    //     <div className="p-3 m-4 w-auto rounded-xl">
    //       <Webcam
    //         ref={webcamRef}
    //         className="w-1/3 h-1/3 rounded-2xl"
    //         style={{
    //           position: 'absolute',
    //           // marginLeft: 'auto',
    //           // marginRight: 'auto',
    //           // left: 0,
    //           // right: 0,
    //           // textAlign: 'center',
    //           // zindex: 9,
    //           // width: 200,
    //           // height: 200,
    //         }}
    //       />

    // <canvas
    //   ref={canvasRef}
    //   style={{
    //     position: 'relative',
    //     // marginLeft: 'auto',
    //     // marginRight: 'auto',
    //     // left: 0,
    //     // right: 0,
    //     // textAlign: 'center',
    //     // zindex: 9,
    //     // width: 200,
    //     // height: 200,
    //   }}
    // />
    //     </div>

    //     <div className=" p-3 m-8 justify-self-center">

    //       <div className="w-32 h-32 justify-center">
    //         {emoji !== null ? (
    //           <img
    //             src={images[emoji]}
    //             style={{
    //               // position: 'absolute',
    //               // marginLeft: 'auto',
    //               // marginRight: 'auto',
    //               // left: 400,
    //               // bottom: 500,
    //               // right: 0,
    //               // textAlign: 'center',
    //               // height: 100,
    //             }}
    //           />
    //         ) : (
    //             ''
    //           )}
    //       </div>

    //       <div className="m-4">
    //      <input id="campo" type="text" value={traduccion} name="nombre"></input>
    //     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clear}> borrar</button>
    //   </div>    
    //     </div>  

    //   </div>
    // </div>
    <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10  relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className=" md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <div className="p-3 m-4 w-auto rounded-xl">
                <Webcam
                  ref={webcamRef}
                  style={{
                    position: 'absolute',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    zindex: 9,
                    width: 300,
                    height: 300,
                  }}

                />
                <canvas
                  ref={canvasRef}
                  style={{
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    zindex: 9,
                    width: 300,
                    height: 300,
                  }}
                />
              </div>

            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10 ">
              <div className="mb-5">
                <h1 className="font-bold uppercase text-2xl mb-5">Letra Identificada</h1>
                <div className="w-32 h-32">
                  {emoji !== null ? (
                    <img
                      src={images[emoji]}
                      style={{
                        // position: 'absolute',
                        // marginLeft: 'auto',
                        // marginRight: 'auto',
                        // left: 400,
                        // bottom: 500,
                        // right: 0,
                        // textAlign: 'center',
                        // height: 100,
                      }}
                    />
                  ) : (
                      ''
                    )}
                </div>
              </div>

              <p className="text-sm">Con este traductor podra escribir en un cuadro de dialogo y tambien podras borrar la ultima Letra  que se reconocio.</p>
            </div>
            {/* caja traductor */}
            <Boxtraductor
              emoji={emoji} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fingerpose;

