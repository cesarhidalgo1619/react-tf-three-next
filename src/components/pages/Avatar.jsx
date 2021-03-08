import React, { Fragment,Suspense } from 'react';
import dynamic from 'next/dynamic'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { LogOut, changeAvatar } from '../../../firebase.config';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const ModeloAvatar = dynamic(() => import('../canvas/Mano'), { ssr: false })

const Sordos = () => {
  
    return (
      <ModeloAvatar
        scale={[.7,.7,.7]} 
        position={[0,-2,0]}
        url={`/modelos/avatars/oswaldo.glb`}
      />
    )
}

const Sordos3d = (props) => {
  return (
    <>
    <div className="bg-gray-400 mt-10" >
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[40, 40, 40]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Sordos 
          // people={props.persona}
          />
        </Suspense>
      </Canvas>
    </div>
    </>
  )
}

const Subavatar = props => {

  ///update avatar
  const handleclick = () => {
    const ava = props.imagen
    changeAvatar(ava)
    
  }

  return (
    <div className="grid grid-cols-2">
   
      <div className="h-full w-full relative bg-white">
        {/* <Sordos3d 
        persona={props.id}
        /> */}
      </div>
      


      <div className=" py-1 flex flex-col justify-center:py-12">
        <div className="w-3/4 relative py-3 max-w-xl mx-auto">
          <div className="opacity-30 absolute inset-0 bg-gradient-to-r to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative bg-gray-100 shadow-2xl sm:rounded-3xl sm:p-10">
            <div className="">
            
              <div className="divide-y divide-gray-200">
                <div className="rounded-2xl pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                  <i className="fas fa-deaf"></i>
                  {/* <Image
                    src={props.imagen}
                    alt="Picture of the author"
                    width={125}
                    height={125}
                    className="rounded-full w-auto h-auto transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-90"
                  /> */}
                  <div className="w-24 h-24 justify-center">                  
                    <img src={props.imagen} className="rounded-full w-auto h-auto transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-90" />
                  </div>
                  <p className="font-bold">{props.nombre}</p>
                  <p>
                    <a className="text-base text-cyan-600 hover:text-cyan-700">{props.cont}</a>
                  </p>
                  <div className=" mt-8 flex-row items-center">
                    <button
                      className="w-15 h-15 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6"
                      onClick={handleclick}

                    >
                      <svg
                        className="animate-bounce w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </button>
                    <span className="ml-2 min-w-full text-sm">Seleccionar este Avatar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <Fragment>
      
      
      
        <div className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">
          <Swiper 
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-screen" >

            <SwiperSlide>
              <Subavatar
                id="oswaldo"
                imagen="/avatars/guillermocaptura.png"
                nombre="Guillermo Zurita"
                cont="Contribuyó a los inicios del movimiento asociativo y en el desarrollo deportivo de la Comunidad Sorda Ecuatoriana"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Subavatar
                id="oswaldo"
                imagen="/avatars/dorotymilles.jpeg"
                nombre="Dorothy Miles"
                cont="La conocían como The Voice From Silent Hands. Además de sus poemas en Lengua de Signos Americana (ASL) y Lengua de Signos Británica (BSL), realizó diferentes programas en la BBC sobre lengua de signos y escribió un libro AL respecto, prologado por la mismísima Diana de Gales; hechos que empujaron a la sociedad británica al aprendizaje de la lengua de signos. "
              />
            </SwiperSlide>
            <SwiperSlide>
              <Subavatar
                id="oswaldo"
                imagen="/avatars/oswaldo.jpg"
                nombre="Oswaldo Racines"
                cont="Lider de la comunidad con habilidades para la pintura, gestionó los viajes para el equipo de futbol de la comunidad sorda llamado Club Deportivo-Silenciosos "
              />
            </SwiperSlide>
          </Swiper>
        </div>
   
    </Fragment>
  );
};

export default Avatar;
