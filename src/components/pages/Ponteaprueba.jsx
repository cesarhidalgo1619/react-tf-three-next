import React,{Fragment} from 'react'


// import Boxtraductor from '../ui/Boxtraductor'
import dynamic from 'next/dynamic'

const FingerposeNum = dynamic(() => import('../machinelearning/FingerposeNum'),
{ loading: () => 
<button type="button" className="bg-rose-600 ..." disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>
  Processing
</button>
})

const Numeros = () => {
    return ( 
    <Fragment>
   
        <FingerposeNum />     
     
     </Fragment>
     );
}
 
export default Numeros;



