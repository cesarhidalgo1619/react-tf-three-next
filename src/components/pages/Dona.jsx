import React,{Fragment} from 'react'
import Memorama from '../memorama/memo'

const Dona = () => {
    return ( 
      <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-5  relative">
      <div className="w-full  h-full rounded bg-white shadow-xl p-5 lg:p-10 mx-auto text-gray-800 relative md:text-left">
      <Memorama />
      </div>
      </div>
     );
}
 
export default Dona;
