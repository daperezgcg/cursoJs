// Esta función crea un nuevo deck
import _ from 'underscore';



/**
 * 
 * @param {Array<string>} tiposDeCarta Ejelmplor:  ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejelmplor:  ['C', 'D', 'H', 'S']
 * @returns {Array<string>} regresa nuestro arreglo de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta Obligatorio, como arreglo de string')
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos especiales de carta Obligatorio, como arreglo de string')

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;


}

