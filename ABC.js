// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 


// Define Gesture Description
export const Letter_A = new GestureDescription('A'); 
export const Letter_B = new GestureDescription('B');
export const Letter_C = new GestureDescription('C');  
export const Letter_D = new GestureDescription('D');
export const Letter_E = new GestureDescription('E'); 
export const Letter_F = new GestureDescription('F');
export const Letter_G = new GestureDescription('G');  
export const Letter_H = new GestureDescription('H');
export const Letter_I = new GestureDescription('I'); 
export const Letter_J = new GestureDescription('J');
export const Letter_K = new GestureDescription('K');  
export const Letter_L = new GestureDescription('L');
export const Letter_M = new GestureDescription('M'); 
export const Letter_N = new GestureDescription('N');
export const Letter_O = new GestureDescription('O');
export const Letter_P = new GestureDescription('P');
export const Letter_Q = new GestureDescription('Q');
export const Letter_R = new GestureDescription('R');
export const Letter_S = new GestureDescription('S');
export const Letter_T = new GestureDescription('T');
export const Letter_U = new GestureDescription('U');
export const Letter_V = new GestureDescription('V');
export const Letter_W = new GestureDescription('W');
export const Letter_X = new GestureDescription('X');
export const Letter_Y = new GestureDescription('Y');
export const Letter_Z = new GestureDescription('Z');
export const _ = new GestureDescription('_');


/*********************A**********************/
//Thumb
Letter_A.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_A.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
// Letter_A.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_A.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_A.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
// Letter_A.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
Letter_A.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_A.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
// Letter_A.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
Letter_A.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_A.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_A.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_A.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


/*********************B**********************/
//Thumb
Letter_B.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_B.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);
Letter_B.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
Letter_B.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_B.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_B.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
Letter_B.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_B.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
Letter_B.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);


//Pinky
Letter_B.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
Letter_B.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


/*********************C**********************/
//Thumb
Letter_C.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_C.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
Letter_C.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_C.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_C.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
Letter_C.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
Letter_C.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
Letter_C.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
Letter_C.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
Letter_C.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);


/*********************D**********************/
//Thumb
Letter_D.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_D.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
Letter_D.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_D.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_D.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_D.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_D.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_D.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_D.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_D.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


/*********************E**********************/
//Thumb
Letter_E.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_E.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
Letter_E.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_E.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_E.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_E.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_E.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_E.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_E.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_E.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

 
/*********************F**********************/
//Thumb
Letter_F.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_F.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
Letter_F.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_F.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_F.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
Letter_F.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_F.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
Letter_F.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_F.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
Letter_F.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


/*********************G**********************/
//Thumb
Letter_G.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_G.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
Letter_G.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_G.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
Letter_G.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_G.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
Letter_G.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_G.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
Letter_G.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_G.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);


/*********************H**********************/
//Thumb
Letter_H.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_H.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Index
Letter_H.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_H.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
Letter_H.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
Letter_H.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
Letter_H.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_H.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
Letter_H.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_H.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);


/*********************I**********************/
//Thumb
Letter_I.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_I.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_I.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_I.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_I.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_I.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_I.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_I.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_I.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
Letter_I.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


/*********************J**********************/
//Thumb
Letter_J.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_J.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
Letter_J.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_J.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_J.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_J.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
Letter_J.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_J.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
Letter_J.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
Letter_J.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

/*********************K**********************/
//Thumb
Letter_K.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_K.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_K.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_K.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_K.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
Letter_K.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_K.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_K.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_K.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_K.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


/*********************L**********************/
//Thumb
Letter_L.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_L.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
Letter_L.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_L.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_L.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_L.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_L.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_L.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_L.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_L.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

/*********************M**********************/
//Thumb
Letter_M.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_M.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_M.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_M.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_M.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_M.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_M.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_M.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_M.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_M.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

/*********************N**********************/
//Thumb
Letter_N.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_N.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_N.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_N.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_N.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_N.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_N.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_N.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_N.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_N.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

/*********************O**********************/
//Thumb
Letter_O.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_O.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
Letter_O.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
Letter_O.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_O.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
Letter_O.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
Letter_O.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_O.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
Letter_O.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_O.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);


/*********************P**********************/
//Thumb
Letter_P.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_P.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Index
Letter_P.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_P.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
Letter_P.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
Letter_P.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.70);

//Ring
Letter_P.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_P.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
Letter_P.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_P.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

/*********************Q**********************/
//Thumb
Letter_Q.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_Q.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.70);

//Index
Letter_Q.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
Letter_Q.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
Letter_Q.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_Q.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
Letter_Q.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_Q.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
Letter_Q.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_Q.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);


/*********************R**********************/
//Thumb
Letter_R.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_R.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_R.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_R.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_R.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
Letter_R.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_R.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_R.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_R.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_R.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


/*********************S**********************/
//Thumb
Letter_S.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_S.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
Letter_S.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_S.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_S.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_S.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_S.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_S.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_S.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_S.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

/*********************T**********************/
//Thumb
Letter_T.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_T.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
Letter_T.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_T.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_T.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_T.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_T.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_T.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_T.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_T.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

/*********************U**********************/
//Thumb
Letter_U.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_U.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_U.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_U.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_U.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
Letter_U.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_U.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_U.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_U.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_U.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

/*********************V**********************/
//Thumb
Letter_V.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_V.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_V.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_V.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_V.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
Letter_V.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_V.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_V.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_V.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_V.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);


/*********************W**********************/
//Thumb
Letter_W.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_W.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Letter_W.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_W.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
Letter_W.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
Letter_W.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_W.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
Letter_W.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.70);

//Pinky
Letter_W.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_W.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);


/*********************X**********************/
//Thumb
Letter_X.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_X.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
Letter_X.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
Letter_X.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_X.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_X.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_X.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_X.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_X.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_X.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

/*********************Y**********************/
//Thumb
Letter_Y.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_Y.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
Letter_Y.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Letter_Y.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
Letter_Y.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_Y.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
Letter_Y.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_Y.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
Letter_Y.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
Letter_Y.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

/*********************Z**********************/
//Thumb
Letter_Z.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
Letter_Z.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);

//Index
Letter_Z.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Letter_Z.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
Letter_Z.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Letter_Z.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);

//Ring
Letter_Z.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Letter_Z.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);

//Pinky
Letter_Z.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Letter_Z.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);



/*********************Space**********************/
//Thumb
_.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
_.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.70);
// _.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
_.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
_.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);
// _.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
_.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
_.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);
// _.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
_.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
_.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
_.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
_.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);