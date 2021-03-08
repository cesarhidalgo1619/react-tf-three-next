import shuffle from 'lodash.shuffle'
const NUMERO_DE_CARTAS = 20;
const num1 = '/memorama/1.png';
const num2 = '/memorama/2.png';
const num3 = '/memorama/3.png';
const num4 = '/memorama/4.png';
const num5 = '/memorama/5.png';
const num6 = '/memorama/6.png';
const num7 = '/memorama/7.png';
const num8 = '/memorama/8.png';
const num9 = '/memorama/9.png';
const A = '/memorama/A.png';

const num1x = '/memorama/1.png';
const num2x = '/memorama/2.png';
const num3x = '/memorama/3.png';
const num4x = '/memorama/4.png';
const num5x = '/memorama/5.png';
const num6x = '/memorama/6.png';
const num7x = '/memorama/7.png';
const num8x = '/memorama/8.png';
const num9x = '/memorama/9.png';
const Ax = '/memorama/A.png';


const construirbaraja=()=>{
    const  imagenes =[num1,num2,num3,num4,num5,num6,num7,num8,num9,A]
    const  imagenesx =[num1x,num2x,num3x,num4x,num5x,num6x,num7x,num8x,num9x,Ax]
    let cartas =[]
    while (cartas.length< NUMERO_DE_CARTAS) {
        const index = Math.floor(Math.random()* imagenes.length)
        const carta ={
            icono: imagenes.splice(index,1)[0], 
            fueadivinada: false
        };
        const cartax ={
            icono: imagenesx.splice(index,1)[0], 
            fueadivinada: false
        };
        
        cartas.push(carta);
        cartas.push({...cartax});
        
    }
    return shuffle(cartas);
}
export default construirbaraja;
