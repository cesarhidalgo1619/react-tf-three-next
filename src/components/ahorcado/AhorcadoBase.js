import React, { Component, Fragment } from 'react';
import AhorcadoImagen from './AhorcadoImagen';
import MensajeUsuario from './MensajeUsuario';
import Data from '../ahorcado/palabras';
import AhorcadoResults from './AhorcadoResults';
import dynamic from 'next/dynamic';
import Fingerpose from '../machinelearning/Fingerpose';

class Ahorcado extends Component {
  state = {
    palabraOculta: [],
    i: 0, //indice
    score: 0,
    mostrarMensaje: null,
    intentosFallidos: 6,
  };
  palabraCompletada = false;

  //se inicializa la palabra inicial del juego.
  componentDidMount() {
    this.generarPalabraOculta(this.state.i);
  }

  //metodo para generar la palabra oculta a partir de la posicion del Array.
  generarPalabraOculta = num => {
    let palabra = Data.palabras[num];
    let palabraOculta = [];
    //se debe reemplazar todo menos la primera y ultima letra
    for (let i = 0; i <= palabra.length - 1; i++) {
      palabraOculta[i] = palabra[i];
    }
    //se ocultan las letras.
    for (let i = 1; i <= palabraOculta.length - 2; i++) {
      palabraOculta[i] = ' _ ';
    }
    this.setState({
      palabraOculta: palabraOculta,
    });
  };

  //genera una nueva palabra oculta, siguiente nivel.
  generarSiguientePalabra = () => {
    let num = this.state.i + 1;
    //validacion para no salirse del rango.
    if (num <= Data.palabras.length - 1) {
      //Siguiente palabra
      this.generarPalabraOculta(num);
      this.setState({
        i: num,
        mostrarMensaje: null,
        intentosFallidos: 6,
      });
    }
    //Limpiar input
    if (document.getElementById('pal') !== null) {
      document.getElementById('pal').value = '';
    }
    this.palabraCompletada = false;
  };

  //evento para detectar tecla enter al ser presionada
  onEnter = e => {
    //al presionar enter ejectutar funcion
    if (e.charCode === 13 && this.palabraCompletada === false) {
      //13 es el codigo de la tecla
      this.handleClick();
    }
    //asignar codigo de la tecla ingresada.
    var codigoTecla = e.keyCode ? e.keyCode : e.which;
    //patron para el ingreso de datos permitido con solo letras.
    let patronPermitido = /[A-Za-z]/;
    //convierte el codigo de la tecla ingresado en el caracter correspondiente.
    let codigoTeclaString = String.fromCharCode(codigoTecla);
    if (!patronPermitido.test(codigoTeclaString)) {
      //evita la escritura de datos no admitidos.
      e.preventDefault();
    }
  };

  //metodo para comprobar las letras ingresadas con la palabra oculta
  handleClick = () => {
    //mostrar mensaje al usuario
    this.setState({
      mostrarMensaje: null,
    });

    //obtiene el input para evaluar
    let letraInput = document.getElementById('pal').value.toLowerCase();
    //comprobar que se ingreso una letra
    if (letraInput !== '') {
      //recolecta la palabra del array de palabras con el indice actual.
      let palabraAdivinar = Data.palabras[this.state.i].toLowerCase();
      //se recorta la palabra sin la letra del inicio y del final ya que estas no cuentan
      let palabraMedio = palabraAdivinar.substr(1, palabraAdivinar.length - 2);
      //se evalua si la letra ingresada por el usuario no coincide con las letras ocultas.
      if (!palabraMedio.includes(letraInput.toLowerCase())) {
        //restar los puntos solo si el score es mayor a 0
        if (this.state.score > 0) {
          this.setState(prevState => ({
            mostrarMensaje: 'error',
            intentosFallidos: prevState.intentosFallidos - 1,
            score: prevState.score - 25,
          }));
        } else {
          this.setState(prevState => ({
            mostrarMensaje: 'error',
            intentosFallidos: prevState.intentosFallidos - 1,
          }));
        }
      } else {
        //la letra corresponde con la palabra.
        //Para comparar si se repiten letras ingresadas.
        //se asigna el contenido de la palabra oculta sin la primera y ultima letra.
        let repiteLetra = this.state.palabraOculta.slice(1, this.state.palabraOculta.length - 1);
        //evalua si la letra ingresada ya fue adivinada en la palabra oculta.
        if (repiteLetra.includes(letraInput)) {
          //muestra mensaje al usuario
          this.setState({
            mostrarMensaje: 'repite',
          });
        } else {
          //Para introducir la letra adivinada en la palabra oculta.
          //se recorre la palabra a adivinar con la letra ingresada
          for (let i = 1; i <= palabraAdivinar.length - 2; i++) {
            if (palabraAdivinar[i] === letraInput.toLowerCase()) {
              //se guarda la palabra oculta en una variable
              let letraAdivinada = this.state.palabraOculta;
              //y se reemplaza el espacio oculto por la letra coincidente.
              letraAdivinada[i] = letraInput;
              //y se va actualizando a medida que se van adivinando las letras.
              this.setState({ palabraOculta: letraAdivinada });
              //se limpia la letra adivinada del input al ser acertada.
              document.getElementById('pal').value = '';
            }
          }
          //Para completar palabra:
          //se evalua si ya no quedan espacios ocultos para adivinar.
          if (!this.state.palabraOculta.includes(' _ ')) {
            //se actualiza el estado con true para indicar mensaje de completado, se suma puntos al score
            //y se establece la palabra completada como true para desactivar el botón de comparacion.
            this.setState(prevState => ({
              mostrarMensaje: 'completado',
              score: prevState.score + 75,
            }));
            this.palabraCompletada = true;
          }
        }
      }
    }
  };

  //Reinicia los valores del juego.
  reiniciarJuego = () => {
    let num = 0;
    this.generarPalabraOculta(num);
    this.setState({
      score: 0,
      i: 0,
      intentosFallidos: 6,
      mostrarMensaje: null,
    });
  };
  //inicio del render
  render() {
    //Pantalla de juego ganado.
    if (this.palabraCompletada === true && this.state.i === 13) {
      return <AhorcadoResults resultado="gana" score={this.state.score} />;
    }
    //Pantalla de juego perdido
    if (this.state.intentosFallidos === 0) {
      //el jugador se quedo sin intentos.
      return (
        <AhorcadoResults
          resultado="pierde"
          reiniciarJuego={this.reiniciarJuego}
          score={this.state.score}
        />
      );
    } else
      return (
        <main className=" min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
          <h5 className=" content-center text-4xl sm:text-5xl md:text-5xl font-bold text-gray-200 mb-5">
            Juego del ahorcado con fingerpose
          </h5>
          <div className=" content-center">
            <div className="group relative ">
              <AhorcadoImagen num={this.state.intentosFallidos} />
              <div className="absolute bg-black rounded bg-opacity-0  w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly"></div>
            </div>
            <div className="p-5 ">
              <div >      
                        <h4 className="text-white text-lg">Nivel {this.state.i + 1}</h4>
              <h5 className="text-white text-lg">{this.state.palabraOculta}</h5>
              <h6 className="text-white text-lg">Puntaje: {this.state.score}</h6></div>


              <div className="">              
                {/* caja de texto */}
              <input
                type="text"
                id="pal"
                className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"
                maxLength="1"
                value={this.props.emoji}
                placeholder="Escribe una letra aquí"
                onKeyPress={this.onEnter}
              />
            </div>
            <div className="inline-block mr-2 mt-2">
              <button
                type="button"
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                onClick={this.handleClick}
                id="btnComparar"
                disabled={this.palabraCompletada}
              >
                ¡Adivinar!
                    </button>
            </div>
            <div className="inline-block mr-2 mt-2">
              <button
                type="button"
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-purple-500 to-black-500 hover:from-green-500 hover:to-blue-500"
                onClick={this.generarSiguientePalabra}
                id="btnGenerar"
                disabled={!this.palabraCompletada}
              >
                Siguiente nivel{' '}
              </button>
            </div></div>  
            <div className="mt-8"> <MensajeUsuario
              msg={this.state.mostrarMensaje}
              intentosFallidos={this.state.intentosFallidos}
            /></div>        
          </div>
        </main>
      );
  }
}

export default Ahorcado;
