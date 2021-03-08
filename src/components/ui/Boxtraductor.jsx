
// import {texto} from '../machinelearning/Fingerpose'

let traduccion = "";
const Boxtraductor = (props) => {

function clear() {
  traduccion = traduccion.substring(0, traduccion.length - 1)
  var texto = document.getElementById('campo');
  texto.value = texto.value.substring(0, texto.value.length - 1);
}
  traduccion = traduccion + props.emoji;
    return ( 
      <div>
      <div className="inline-block align-bottom mr-5">
        <input id="campo" type="text" className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200" value={traduccion} name="nombre"></input>
      </div>
      <div className="inline-block align-bottom">
        <button onClick={clear} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"> Borrar</button>
      </div>
    </div>
     );
}
 
export default Boxtraductor;
