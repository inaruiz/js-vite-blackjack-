
import _ from 'underscore';

/**
 * esta uncion crea un nuevo deck
 * @param {*} tiposDeCarta 
 * @param {*} tiposEspeciales 
 * @returns -regresa un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    
    let deck= [];
    for (let i = 2; i<= 10; i++)  {
        for (let tipo of tiposDeCarta){
            deck.push(i+tipo);
        }   
    }
    for (let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp+tipo);
        }
    
    }
    deck = _.shuffle(deck);
    return deck; 
}