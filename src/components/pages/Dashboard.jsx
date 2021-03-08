
import React,{Fragment} from 'react'
// import Hands from '../ui/Hands';

import Tabs from './Tabs';
import {Link} from 'react-router-dom';
import TableroCard from '@/components/ui/TableroCard';

const Dashboard = () => {
  return (
      <Fragment>
    
    <div className="overflow-auto">
    <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:gap-x-16 lg:px-40 lg:pt-4 fondo">

      <div className="cursor-pointer flex flex-row bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105">      
       <Iconbiblioteca />
       <TableroCard 
        url="./biblioteca"
        titulo="Biblioteca"
        cont="Abecedario y Números del Lenguaje de Señas Ecuatoriano"
       />
      </div>

      <div className="cursor-pointer flex flex-row bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105">      
        <Icontraductor />
        <TableroCard 
        url="./traductor"
        titulo="Traductor"
        cont="Convierte lenguaje de signos a letras mediante la cámara"
       />
      </div>

      <div className="cursor-pointer flex flex-row bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105">      
       <Iconponteaprueba />
       <TableroCard 
        url="./ponteaprueba"
        titulo="Ponte a Prueba"
        cont="Usando la cámara e Inteligencia Artificial Aprende y Divierte"
       />
      </div>

      <div className="cursor-pointer flex flex-row bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105">      
        <Iconactivate />
        <TableroCard 
        url="./activate"
        titulo="Activate"
        cont="Activa tu cuerpo con Inteligencia Artificial"
       />
      </div>

      <div className="cursor-pointer flex flex-row bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105">      
      <Icondona />
        <TableroCard 
        url="./dona"
        titulo="Dona"
        cont="Apoya a la comunidad de sordos del Ecuador"
       />
      </div>

      <div className="cursor-pointer flex flex-row bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 mb-36 lg:mb-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105">      
      <Iconconoce />
        <TableroCard 
        url="./conoce"
        titulo="IA + Neuroeducación"
        cont="Conoce sobre la argumentación teórica de este proyecto"
       />
      </div>

      <div className="cursor-pointer flex flex-row bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105">      
        <Icontraductor />
        <TableroCard 
        url="./game"
        titulo="El Ahorcado"
        cont="Juego mientras aprendes el lenguaje de señas, con machine learning"
       />
      </div>

        </div>
        {/* <Hands /> */}
        <div className="absolute inset-x-0 bottom-0 w-full flex justify-center">
          <Tabs />
        </div>
    </div>
  
      
          <style jsx>{`
      .fondo{
        /*
          background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
        */
        background: url('https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80');
        background-repeat: no-repeat;
        background-size: cover;
      }
    `}</style>
      </Fragment>
  );
};

export default Dashboard;

const Iconbiblioteca = () => {
  return ( 
    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  </div>
   );
}

const Icontraductor = () => {
  return ( 
    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
</svg>
        </div>
   );
}

const Iconponteaprueba = () => {
  return ( 
    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
    </div>
   );
}

const Iconactivate = () => {
  return ( 
    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-100 text-yellow-500">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
    </div>
   );
}

const Icondona = () => {
  return ( 
    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-purple-100 text-purple-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
        </div>
   );
}

const Iconconoce= () => {
  return ( 
    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-pink-100 text-pink-500">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
</svg>
        </div>
   );
}


