
import _ from 'underscore'; 

import { crearDeck, pedirCarta,valorCarta,turnoComputadora,crearCartaHTML} from './usecases';

(()=>{

  'use strict'

  let deck         = [];
  const tipos      = [ 'C','D', 'H', 'S'],
        especiales = [ 'A','J', 'Q', 'K'] 
  
  let puntosJugador      = 0;
    
  
  
  //referencias del HTML
  const btnPedir       = document.querySelector ('#btnPedir'),
         btnDetener    = document.querySelector ('#btnDetener'),
         btnNuevo      = document.querySelector ('#btnNuevo');

  const puntosHTML = document.querySelectorAll ('small'),
        divCartasJugador = document.querySelector ('#jugador-cartas'),
        divCartasComputadora = document.querySelector ('#computadora-cartas');
        
 // esta funcion inicializa el juego:
//  const inicializarJuego = () => {
//   deck = crearDeck (tipos, especiales);
//  }

 //Esta función crea un nuevo deck:

 

 deck = crearDeck (tipos, especiales);
  



  

  
  // Eventos
  
  btnPedir.addEventListener('click', ()=> {
      const carta = pedirCarta(deck);
      puntosJugador = puntosJugador + valorCarta (carta);
      puntosHTML[0].innerText = puntosJugador;
  
      console.log (puntosJugador);
  
      const imgCarta = crearCartaHTML (carta);
      divCartasJugador.append(imgCarta);
  
      if (puntosJugador> 21){
          console.warn ('Has perdido, Fin de la partida');
          btnPedir.disabled = true;
          turnoComputadora (puntosJugador, puntosHTML, divCartasComputadora, deck);
      } else if (puntosJugador === 21){
          console.warn ('21, Genial!');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora (puntosJugador,puntosHTML,divCartasComputadora, deck);
  
      }
  });
  
  btnDetener.addEventListener('click', ()=> {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
  
      turnoComputadora (puntosJugador,puntosHTML,divCartasComputadora, deck);
  
  });
  
  btnNuevo.addEventListener('click', ()=> {
  
  console.clear ();
  deck= [];
  deck = crearDeck (tipos, especiales);
  puntosJugador = 0;
  puntosComputadora = 0;
  
  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;
  
  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';
  btnPedir.disabled = false;
  btnDetener.disabled = false;
  
  
  });



}) ();





