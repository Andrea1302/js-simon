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
const inviaBtn = document.getElementById("invia");
const inputValue = document.getElementById("input_text");
// console.log(inputValue);



// genero 5 numeri random 
const numeriRandom = [];
// console.log(numeriRandom.length);
while ( numeriRandom.length != 5 ){
    let numero = Math.floor(Math.random()*100 + 1);

    let duplicato = numeriRandom.includes(numero);

    if ( duplicato === false ) {
        numeriRandom.push(numero)
    }
}
console.log(numeriRandom);

// inserisco i numeri random nell html 
containerNumeri.innerHTML += `${numeriRandom[0]} ${numeriRandom[1]}   ${numeriRandom[2]}   ${numeriRandom[3]}        ${numeriRandom[4]}`

// timer di partenza 

let clock = setTimeout (function() {
    miaFunzione();
}, 4000);


// let numeriRicordati =[]
var contatore = 0
// while ( numeriRicordati.length != 5){
    inviaBtn.addEventListener("click",function(){
            contatore++
            if ( contatore === 5){
                inviaBtn.disabled = true;
            }
            
            console.log(contatore);
            let valore = parseInt(inputValue.value) 
            console.log(valore);
            numeriRandom.forEach((numero)=>{
                let num = numero;
                if( num === valore){
                    containerNumeri.innerHTML += `${valore} `
                }
            })

    })
//    
// console.log(numeriRicordati);


function miaFunzione() {
    containerNumeri.innerHTML = "I numeri indovinati sono i seguenti :"
    // let quantiNumeri = 0
    
    // for ( let i = 0 ; i < numeriRandom.length; i++){
    //         console.log(numeriRicordati[i]);
    //         let indovinati = numeriRandom.includes(numeriRicordati[i]);
    //     if ( indovinati === false) {
    //         console.log("no");
    //     } else {
    //         quantiNumeri++
    //         console.log("siiii");
    //         containerNumeri.innerHTML += `${numeriRicordati[i]} `
    //     }
        
    // }
    
    // containerNumeri.innerHTML += `,hai indovinato ${quantiNumeri} numeri `
    // if ( quantiNumeri === 0 ){
    //     containerNumeri.innerHTML = `
    //     Non hai indovinato nessun numero, allena la tua memoria ! `
    // }
}