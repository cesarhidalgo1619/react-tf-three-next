import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'

const Mano = dynamic(() => import('../canvas/Mano'), { ssr: false })

const letra = "B"

const Manos = () => {
  // return new Array(5).fill().map((_, i) => {
  //   const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
  //   const y = -10 + Math.random() * 20
  //   const z = -5 + Math.random() * 10
  //   const bird = ['stork', 'parrot', 'flamingo'][Math.round(Math.random() * 2)]
  //   let speed = bird === 'stork' ? 0.5 : bird === 'flamingo' ? 2 : 5
  //   let factor =
  //     bird === 'stork'
  //       ? 0.5 + Math.random()
  //       : bird === 'flamingo'
  //       ? 0.25 + Math.random()
  //       : 1 + Math.random() - 0.5

  console.log(letra)
    return (
      <Mano
        // key={i}
        // position={[x, y, z]}
        // rotation={[0, x > 0 ? Math.PI : 0, 0]}
        scale={[.7,.7,.7]} 
        position={[0,-2,0]}
        // speed={speed}
        // factor={factor}
        // url = {`/glb/${bird}.glb`}
        url={`/modelos/letras/${letra}.glb`}
      />
    )
  // })
}



const Visor3d = (props) => {
  return (
    <>
    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-screen h-screen ">
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[40, 40, 40]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Manos 
            // letra={props.letra}
          />
        </Suspense>
      </Canvas>
    </div>
    </>
  )
}

// const Panel = () => {
//   return(
//     <div className=" w-40 h-40 bg-white">
//       <button
//       letra="A"
//       onClick = {Visor3d}
//       >
//         A
//       </button>
//     </div>
//   )
// }



export default Visor3d
