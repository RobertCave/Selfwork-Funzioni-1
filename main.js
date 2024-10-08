// Selfwork Funzioni 1
// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.  

//     Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
//         ogni dado ha 6 facce
//         ogni giocatore tirerà il dado n volte
//     Per ogni giocatore:
//         generare un numero casuale per ogni tiro che effettuera’,
//         ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.


// TIPS:
// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1) + 1);



function tiraDadi(volte){
    let risultato = 0;
    for (let i=0; i<=volte; i++) {
        risultato += Math.floor(Math.random() * (6 - 1) + 1);
    }   
    return risultato;
    
}

let tiri = parseInt(prompt("Giochi di dadi.\nPer quante volte vuoi tirare il dado?"));

let giocatore1 = tiraDadi(tiri);
let giocatore2 = tiraDadi(tiri);

console.log(`Risultato finale giocatore-1: ${giocatore1}`);    
console.log(`Risultato finale giocatore-2: ${giocatore2}`);    

if (giocatore1 > giocatore2) {
    console.log("Il vincitore della partita è il giocatore-1");
} else if (giocatore2 > giocatore1){
    console.log("Il vincitore della partita è il giocatore-2");
} else {
    console.log("La partita è finita in pareggio");
}



