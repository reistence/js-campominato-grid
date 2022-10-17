// **Consegna**
// L'utente clicca su un bottone che genererà una griglia
// di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata
// si colora di azzurro ed emetto un messaggio in console
// con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione,
// che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso
// tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso
// tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso
// tra 1 e 49, divise in 7 caselle per 7 righe;

const playBtn = document.getElementById("play");
const row = document.querySelector(".row");
let squaresNr = 100;
console.log(squaresNr, typeof squaresNr);

// generate an array of given number size
const numbersArray = [];
console.log(numbersArray);

// for (i = 1; i <= squaresNr; i++) {
//   console.log(i);
//   numbersArray.push(i);
//   const square = document.createElement("div");
//   square.classList.add("square");
//   square.classList.add("easy");
//   square.innerHTML = i;
//   console.log(square);
//   row.append(square);
// }

generateOrderedArray(squaresNr);
console.log(numbersArray);

// FUNCTION
function generateOrderedArray(arrayLength) {
  const numbersArray = [];
  for (i = 1; i <= arrayLength; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}
