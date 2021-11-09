/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// 1 Richiamare la variabile dove scrivere l html al suo interno
// 2 Generare 5 numeri random ( non duplicati )
// 3inserire nell html i 5 numeri generati
// 4 creare timer di 30 secondi dove inserire all inerno il prompt per chiedere di scrivere i numeri visti
// 5 salvare in variabili le risposte dell utente
// 5.2 confrontare le risposte dell utente con i numeri generati random
// 5.3 Stampare in pagina i numeri indovinati se esistono.


const containerNumeri = document.getElementById("contenitore_numeri");



// genero 5 numeri random 
const numeriRandom = [];
console.log(numeriRandom.length);
while ( numeriRandom.length != 5 ){
    let numero = Math.floor(Math.random()*100 + 1);

    let duplicato = numeriRandom.includes(numero);

    if ( duplicato === false ) {
        numeriRandom.push(numero)
    }
}
console.log(numeriRandom);

containerNumeri.innerHTML += `${numeriRandom[0]} ${numeriRandom[1]}   ${numeriRandom[2]}   ${numeriRandom[3]}        ${numeriRandom[4]}`

var timer = 0 ;

let clock = setInterval (miaFunzione,1000)

function miaFunzione() {

    timer++
    console.log(timer);
    if ( timer === 4){
        clearInterval(clock);
        containerNumeri.innerHTML = "I numeri indovinati sono i seguenti :"
        let quantiNumeri = 0
        for ( let i = 0 ; i < numeriRandom.length; i++){
           let numeriRicordati =  parseInt(prompt("Inserisci i numeri "));

            let indovinati = numeriRandom.includes(numeriRicordati);
           if ( indovinati === false) {
               console.log("no");
           } else {
            //    let numeriIndovinati = numeriRicordati;
               containerNumeri.innerHTML += `${numeriRicordati} `
               quantiNumeri++
           }
           
        }
        if ( quantiNumeri === 0 ){
            containerNumeri.innerHTML += `
            Nemmeno uno, allena la tua memoria ! `
        }

    }
}