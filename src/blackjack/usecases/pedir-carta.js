/**
 * 
 * @param {array<String>} deck Es un arreglo de string 
 * @returns {string} retorna una carta del deck
 */


export const pedirCarta = (deck)=>{
    if (deck.length ===0) {
        throw 'Ya no hay cartas en el deck';
    }
   return deck.pop();

}
