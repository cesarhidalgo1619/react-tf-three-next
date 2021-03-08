// import {
//   IonButton,
//   IonLabel,
//   IonCardTitle,
//   IonCardSubtitle,
//   IonCol, IonRow,
//   IonCardHeader,
//   IonCard, IonSlide,
//   IonSlides,
//   IonCardContent,
//   IonContent,
//   IonHeader,
//   IonIcon,
//   IonInput,
//   IonItem,
//   IonList,
//   IonToggle,
//   IonLoading,
//   IonPage,
//   IonTitle,
//   IonToolbar } from '@ionic/react';

// import Store from '../store';
// import * as selectors from '../store/selectors';
// import { getHomeH } from '../store/selectors';

// import Avatar1 from "../components/Avatar1";
// import Hands from "../components/hands";
// import LoadModelDemo from "../components/main";
// import styles from "./Home.module.css"; // import ExploreContainer from '../components/ExploreContainer';
// import "@codetrix-studio/capacitor-google-auth";
// import { useHistory } from "react-router";
// import { loginGoogle } from "../firebase-config";
// import Avatar1 from '../components/Avatar1';
// import {Helmet} from "react-helmet";

import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/AppShell'), {
  ssr: false,
});

import React, { Fragment } from 'react';
import { LoginGoogle } from '../../firebase.config';
import useUser from '../../hooks/useUser';

// import Hands from '../components/ui/Hands'

export default function Index(props) {

const user =useUser()

  const handleClick = () => {
    LoginGoogle()
  };

  // const history = useHistory();

  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  // Si la autenticación es verdadera
  
  if (user) {
    // if (true) {  
    return <App />;
  }

  return (
    <Fragment>
      <div className="h-screen font-sans login bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <div className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                {/* <Hands /> */}
                <p className="text-white text-center text-lg font-bold">HANDS-UP</p>
                <p className="text-gray-300 font-medium text-center text-md opacity-70 ">Inteligencia Artificial y Neuroeducación Para El Aprendizaje Del Lenguaje de Señas Ecuatoriono</p>
                <div className="">
                </div>
                <div className="mt-2">
                </div>
                <div className="mt-4 items-center flex justify-between">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    onClick={handleClick}
                  >
                    Registrate con tu Cuenta de Google
                  </button>
                  
                </div>
                <div className="text-center">
                </div>
              </div>
            </div>
            {/* <div className="text-center">
              { user == null &&
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                onClick={handleClick}
              >
                Google auth
              </button>
              }
              {user && user.avatar && <div>
                <img src={user.avatar}/>
                <p>{user.username}</p>
               
                <strong>{user.email}</strong>
              </div>

              }{
                user==undefined
              }
            </div> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .login {
          /*
            background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
          */
          background: url('http://bit.ly/2gPLxZ4');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </Fragment>
  );
}
