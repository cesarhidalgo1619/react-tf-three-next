import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import React, { useRef,useState,useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {

    // let gltf = useLoader(GLTFLoader,"/modelos/letras/H.glb");
    let gltf = useLoader(GLTFLoader,"/modelos/avatars/oswaldo.glb");

    return(
      <primitive 
      scale={[.7,.7,.7]} 
      position={[0,-2,0]}
      object={gltf.scene} 
      />
  
    ) 
      
  }

  function Handz() {
    return (
      <div className="h-screen w-screen">
        <Canvas invalidateFrameloop>
          <ambientLight intensity={0.3} />
          <pointLight position={[10,10,10]} />
          <Suspense fallback='Loading'>
            <Model />
            
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    );
  }
  
  export default Handz;
