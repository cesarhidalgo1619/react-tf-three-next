//finger points
const fingerJoints = {
  thumb:[0,1,2,3,4],
  index:[0,5,6,7,8],
  mid:[0,9,10,11,12],
  ring:[0,13,14,15,16],
  pinky:[0,17,18,19,20]
};

// Infinity Gauntlet Style
const style = {
    0: { color: "red", size: 5 },
    1: { color: "blue", size: 5 },
    2: { color: "blue", size: 5 },
    3: { color: "gold", size: 5 },
    4: { color: "gold", size: 5 },
    5: { color: "blue", size: 5 },
    6: { color: "blue", size: 5 },
    7: { color: "gold", size: 5 },
    8: { color: "gold", size: 5 },
    9: { color: "blue", size: 5 },
    10: { color: "blue", size: 5 },
    11: { color: "gold", size: 5 },
    12: { color: "gold", size: 5 },
    13: { color: "blue", size: 5 },
    14: { color: "blue", size: 5 },
    15: { color: "gold", size: 5 },
    16: { color: "gold", size: 5 },
    17: { color: "blue", size: 5 },
    18: { color: "blue", size: 5 },
    19: { color: "gold", size: 5 },
    20: { color: "gold", size: 5 },
  };

//drawing function
export const drawHand = (prediction, ctx) => {
  //check the prediction
  if(prediction.length > 0){
      //loop to the preditions
      prediction.forEach((prediction) =>{
          //grab landmarks
          const landmarks = prediction.landmarks;

          //loop the finger joints
          for(let j = 0; j<Object.keys(fingerJoints).length; j++){
              let finger = Object.keys(fingerJoints)[j];
              for(let k=0; k<fingerJoints[finger].length -1; k++){
                  const firstJointIndex = fingerJoints[finger][k];
                  const secondJointIndex = fingerJoints[finger][k+1];

                  //draw joints
                  ctx.beginPath();
                  ctx.moveTo(
                      landmarks[firstJointIndex][0],
                      landmarks[firstJointIndex][1]);
                      ctx.lineTo(
                          landmarks[secondJointIndex][0],
                          landmarks[secondJointIndex][1]
                      );
                  ctx.strokeStyle = "plum";
                  ctx.lineWidth = 2;
                  ctx.stroke();
              }
          }

          //loop to landmarks and draw them
          for(let i = 0; i<landmarks.length; i++){
              //get x point
              const x = landmarks[i][0];

              //get y point
              const y = landmarks[i][1];

              //start drawing
              ctx.beginPath();
              ctx.arc(x,y,style[i]["size"], 0, 3*Math.PI);

              //set line color
              ctx.fillStyle = style[i]["color"];
              ctx.fill();
          }
      })
  }
}