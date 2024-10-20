/**
 * 
 * @param {string} carta 
 * @return {HTMLImageElement} imagen de retorno
 * 
 */


export const crearCartaHTML = (carta) => {

    const imgCarta = document.createElement ('img');
    imgCarta.src =  `assets/cartas/${ carta}.png`;
    imgCarta.classList.add ('carta');

    return imgCarta;
}