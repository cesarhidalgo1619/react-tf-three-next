//ML
import * as ts from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from '../../../utilities';
import { useState, useRef, useEffect } from 'react';
import Boxtraductor from '../ui/Boxtraductor';

//Models ML
import * as fp from 'fingerpose';
const A = '/Alfanumerico/1.png';
const B = '/Alfanumerico/2.png';
const C = '/Alfanumerico/3.png';
const D = '/Alfanumerico/4.png';
const E = '/Alfanumerico/5.png';
const F = '/Alfanumerico/6.png';
const G = '/Alfanumerico/7.png';
const H = '/Alfanumerico/8.png';
const I = '/Alfanumerico/9.png';

import {
  Number_1,
  Number_2,
  Number_3,
  Number_4,
  Number_5,
  Number_6,
  Number_7,
  Number_8,
  Number_9
} from '../../../123';

const Fingerpose = () => {
  //ML
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState("");



  // export let texto = traduccion;

  const images = {
    1: A,
    2: B,
    3: C,
    4: D,
    5: E,
    6: F,
    7: G,
    8: H,
    9: I
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
            Number_1,
            Number_2,
            Number_3,
            Number_4,
            Number_5,
            Number_6,
            Number_7,
            Number_8,
            Number_9
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
    <div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1">

        <div className="p-3 m-4 w-auto rounded-xl">
          <Webcam
            ref={webcamRef}
            className="rounded-2xl"
            style={{
              position: 'absolute',
              // marginLeft: 'auto',
              // marginRight: 'auto',
              // left: 0,
              // right: 0,
              // textAlign: 'center',
              // zindex: 9,
              // width: 200,
              // height: 200,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: 'relative',
              // marginLeft: 'auto',
              // marginRight: 'auto',
              // left: 0,
              // right: 0,
              // textAlign: 'center',
              // zindex: 9,
              // width: 200,
              // height: 200,
            }}
          />
        </div>

        <div className=" p-3 m-8 flex flex-col justify-self-center">

          <div className="w-32 h-32 justify-center">
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
 
      </div>




      {/* <div style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        right: "calc(50% - 50px)",
        bottom: 100,
        textAlign: "-webkit-center",
      }}
      > */}

      {/* </div> */}
    </div>
    
  );
};

export default Fingerpose;

