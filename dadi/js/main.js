"use strict";

// Consegna Gioco dei dadi:
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. Crea una variabile che generi un numero random per il giocatore e salva il dato in console
// 2. Crea una variabile che generi un numero random per il computer e salva il dato in console
// 3. Determina il vincitore, con una istruzione condizionale, in base a chi ottiene il punteggio più alto
//    3a. SE il numero generato per il giocatore è maggiore di quello della CPU allora stampa in console la vittoria del giocatore
//        ALTRIMENTI SE il numero generato per il giocatore è UGUALE a quello della CPU allora stampa in console il pareggio
//        ALTRIMENTI vince la CPU

const numberPlayer = Math.floor(Math.random() * 6) + 1;
console.log("Numero player:", numberPlayer);
const numberCpu = Math.floor(Math.random() * 6) + 1;
console.log("Numero CPU:", numberCpu);

if( numberPlayer > numberCpu ) {
    console.log("Ha vinto il giocatore!");
} else if ( numberPlayer === numberCpu ) {
    console.log("Pareggio!");
} else {
    console.log("Ha vinto la CPU!");
}