import React,{Fragment} from 'react'


import dynamic from 'next/dynamic'

const Posenet = dynamic(() => import('../machinelearning/Posenet'),{ loading: () => <p>...</p> })

const Activate = () => {
    return ( 
    <Fragment>
     
     </Fragment>
     );
}
 
export default Activate;




