import React,{Fragment} from 'react'
import Tarjeta from '../ui/Tarjeta';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
    
  };

const Biblioteca = () => {
    return ( 
    <Fragment>
  
        <div className="bg-gray-100">
     
              <div>Biblioteca</div>
       
            <div className="mt-4 flex justify-center">
            <button
                    className="m-4 w-20 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-purple-500 hover:border-purple-600 hover:bg-purple-500 hover:text-white shadow-md py-2 px-6"
                    type="submit"
                  >
                    <span className="min-w-full w-20">ABC</span>
                  </button>
            <button
                    className="m-4 w-20 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-purple-500 hover:border-purple-600 hover:bg-purple-500 hover:text-white shadow-md py-2 px-6"
                    type="submit"
                  >
                    <span className="min-w-full w-20">#</span>
                  </button>
            </div>
      
          </div>
          <div className="fondo overflow-auto">
            <Abecedario />
          </div>
   
        <style jsx>{`
      .fondo{
        /*
          background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
        */
        background: url('https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1532&q=80');
        background-repeat: no-repeat;
        background-size: cover;
        
      }
    `}</style>
    </Fragment>  
    );
}
 
export default Biblioteca;

const Abecedario = () => {
    return (
        <div>
        <Swiper 
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full h-screen"
        >
            <SwiperSlide>
                <div >
                    <div className="m-4 justify-center ">
                    <div className="bg-white p-3 cursor-move rounded-lg shadow-2xl opacity-40 w-full hover:opacity-60 ">
                      <div className="animate-pulse flex justify-between font-sans text-3xl text-black font-black">
                      <div>
                        A
                      </div>
                      <div>
                        B
                      </div>
                      <div>
                        C
                      </div>
                      <div>
                        D
                      </div>
                      </div>
                     
                      </div>
                    </div>
                    <div className="grid grid-cols-2 justify-center lg:mx-40 mt-10 ">
                    <Tarjeta 
                    titulo="A"
                    tipo="Letra"
                     url="/img/handz/A.png"
                    />
                     <Tarjeta 
                    titulo="B"
                    tipo="Letra"
                     url="/img/handz/B.png"  
                    />
                     <Tarjeta 
                    titulo="C"
                    tipo="Letra"
                     url="/img/handz/C.png"  
                    />
                     <Tarjeta 
                    titulo="D"
                    tipo="Letra"
                     url="/img/handz/D.png"  
                    />
                    </div>
                 </div>

            </SwiperSlide>
            <SwiperSlide>
            <div className="container">
                    <div className="m-4 justify-center ">
                    <div className="bg-white p-3 cursor-move rounded-lg shadow-2xl opacity-40 w-full hover:opacity-60 ">
                      <div className="animate-pulse flex justify-between font-sans text-3xl text-black font-black">
                      <div>
                        E
                      </div>
                      <div>
                        F
                      </div>
                      <div>
                       G
                      </div>
                      <div>
                        H
                      </div>
                      </div>
                     
                      </div>
                    </div>
                    <div className="mt-20 grid lg:grid-cols-2 lg:gap-x-96 gap-y-20 sm:grid-cols-1">
                    <Tarjeta 
                    titulo="E"
                    tipo="Letra"
                     url="/img/handz/E.png"  
                    />
                     <Tarjeta 
                    titulo="F"
                    tipo="Letra"
                     url="/img/handz/F.png"  
                    />
                     <Tarjeta 
                    titulo="G"
                    tipo="Letra"
                     url="/img/handz/G.png"  
                    />
                     <Tarjeta 
                    titulo="H"
                    tipo="Letra"
                     url="/img/handz/H.png"  
                    />
                    </div>
                 </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="container">
                    <div className="m-4 justify-center ">
                    <div className="bg-white p-3 cursor-move rounded-lg shadow-2xl opacity-40 w-full hover:opacity-60 ">
                      <div className="animate-pulse flex justify-between font-sans text-3xl text-black font-black">
                      <div>
                        I
                      </div>
                      <div>
                        J
                      </div>
                      <div>
                        K
                      </div>
                      <div>
                        L
                      </div>
                      </div>
                     
                      </div>
                    </div>
                    <div className="mt-20 grid lg:grid-cols-2 lg:gap-x-96 gap-y-20 sm:grid-cols-1">
                    <Tarjeta 
                    titulo="I"
                    tipo="Letra"
                     url="/img/handz/I.png"  
                    />
                     <Tarjeta 
                    titulo="J"
                    tipo="Letra"
                     url="/img/handz/J.png"  
                    />
                     <Tarjeta 
                    titulo="K"
                    tipo="Letra"
                     url="/img/handz/K.png"  
                    />
                     <Tarjeta 
                    titulo="L"
                    tipo="Letra"
                     url="/img/handz/L.png"  
                    />
                    </div>
                 </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="container">
                    <div className="m-4 justify-center ">
                    <div className="bg-white p-3 cursor-move rounded-lg shadow-2xl opacity-40 w-full hover:opacity-60 ">
                      <div className="animate-pulse flex justify-between font-sans text-3xl text-black font-black">
                      <div>
                        M
                      </div>
                      <div>
                        N
                      </div>
                      <div>
                        O
                      </div>
                      <div>
                        P
                      </div>
                      </div>
                     
                      </div>
                    </div>
                    <div className="mt-20 grid lg:grid-cols-2 lg:gap-x-96 gap-y-20 sm:grid-cols-1">
                    <Tarjeta 
                    titulo="M"
                    tipo="Letra"
                     url="/img/handz/M.png"  
                    />
                     <Tarjeta 
                    titulo="N"
                    tipo="Letra"
                     url="/img/handz/N.png"  
                    />
                     <Tarjeta 
                    titulo="O"
                    tipo="Letra"
                     url="/img/handz/O.png"  
                    />
                     <Tarjeta 
                    titulo="P"
                    tipo="Letra"
                     url="/img/handz/P.png"  
                    />
                    </div>
                 </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="container">
                    <div className="m-4 justify-center ">
                    <div className="bg-white p-3 cursor-move rounded-lg shadow-2xl opacity-40 w-full hover:opacity-60 ">
                      <div className="animate-pulse flex justify-between font-sans text-3xl text-black font-black">
                      <div>
                        Q
                      </div>
                      <div>
                        R
                      </div>
                      <div>
                        S
                      </div>
                      <div>
                        T
                      </div>
                      </div>
                     
                      </div>
                    </div>
                    <div className="mt-20 grid lg:grid-cols-2 lg:gap-x-96 gap-y-20 sm:grid-cols-1">
                    <Tarjeta 
                    titulo="Q"
                    tipo="Letra"
                     url="/img/handz/Q.png"  
                    />
                     <Tarjeta 
                    titulo="R"
                    tipo="Letra"
                     url="/img/handz/R.png"  
                    />
                     <Tarjeta 
                    titulo="S"
                    tipo="Letra"
                     url="/img/handz/S.png"  
                    />
                     <Tarjeta 
                    titulo="T"
                    tipo="Letra"
                     url="/img/handz/T.png"  
                    />
                    </div>
                 </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="container">
                    <div className="m-4 justify-center ">
                    <div className="bg-white p-3 cursor-move rounded-lg shadow-2xl opacity-40 w-full hover:opacity-60 ">
                      <div className="animate-pulse flex justify-between font-sans text-3xl text-black font-black">
                      <div>
                        U
                      </div>
                      <div>
                        V
                      </div>
                      <div>
                        W
                      </div>
                      <div>
                        X
                      </div>
                      </div>
                        
                      </div>
                    </div>
                    <div className="mt-20 grid lg:grid-cols-2 lg:gap-x-96 gap-y-20 sm:grid-cols-1">
                    <Tarjeta 
                    titulo="U"
                    tipo="Letra"
                     url="/img/handz/U.png"  
                    />
                     <Tarjeta 
                    titulo="V"
                    tipo="Letra"
                     url="/img/handz/V.png"  
                    />
                     <Tarjeta 
                    titulo="W"
                    tipo="Letra"
                     url="/img/handz/W.png"  
                    />
                     <Tarjeta 
                    titulo="X"
                    tipo="Letra"
                     url="/img/handz/X.png"  
                    />
                    </div>
                 </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="container">
                    <div className="m-4 justify-center ">
                    <div className="bg-white p-3 cursor-move rounded-lg shadow-2xl opacity-40 w-full hover:opacity-60 ">
                      <div className="animate-pulse flex justify-between font-sans text-3xl text-black font-black">
                      <div>
                        Y
                      </div>
                      <div>
                        Z
                      </div>
                      </div>
                     
                      </div>
                    </div>
                    <div className="mt-20 grid lg:grid-cols-2 lg:gap-x-96 gap-y-20 sm:grid-cols-1">
                    <Tarjeta 
                    titulo="Y"
                    tipo="Letra"
                     url="/img/handz/Y.png"  
                    />
                     <Tarjeta 
                    titulo="Z"
                    tipo="Letra"
                     url="/img/handz/Z.png"  
                    />
                    </div>
                 </div>
            </SwiperSlide>
          </Swiper> 
         
        </div>
        
      );
}

const Numeros = () => {
    return (<div><p>En Desarrollo</p></div>);
}


