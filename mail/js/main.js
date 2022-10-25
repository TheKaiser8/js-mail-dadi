"use strict";

// Consegna es. Mail:
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1. Creo una lista di mail (ARRAY) autorizzate ad accedere e stampo il dato in console
// 2. Chiedo all'utente di inserire la sua mail (PROMPT) e stampo il dato in console
// 3. Controllo che la mail inserita sia nell'array creato
//    SE la mail inserita è autorizzata stampo in console il messaggio e creo un ALERT con esito positivo
//    ALTRIMENTI stampo in console il messaggio e creo un ALERT con esito negativo

const mails = [ "aldo@gmail.com", "giovanni@gmail.com", "giacomo@gmail.com" ];
console.log(mails);
const yourMail = prompt("Inserisci la tua mail");
console.log(yourMail);

for (let i = 0; i < mails.length; i++) {
    if ( yourMail === mails[i] ) {
        console.log("Accesso consentito");
        alert("Sei autorizzato ad accedere");
        break;
    } else {
        console.log("Accesso negato");
        alert("NON sei autorizzato ad accedere. Si prega di inserire una mail autorizzata.");
        location.reload();
    }
}