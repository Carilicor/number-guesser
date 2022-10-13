/*
create a program that guesses a number from 1 to 10
then ask us to guess that number.
if it is higher say "too high" and ask again.
if it's lower say "too low" an ask again.
if its the right number say "congratulations" and exit.
*/

import readline from "readline-sync"

let userGuessedRight = false

//let NumberChosen = Math.floor(Math.random() *10)
//console.log(NumberChosen)
//while(true) { playing - dont use - endless loop
//random number generator - guess a number 
let NumberChosen = Math.ceil(Math.random() * 10)
console.log(NumberChosen)
//}
// while (!userGuessedRight) {
//     let guess = readline.question("What is your guess?")
//     if (guess == NumberChosen) {
//         console.log("congratulations")
//         userGuessedRight = true
//     }
// }


while (!userGuessedRight) {
    let guess = readline.question("What is your guess?")
    if (guess == NumberChosen) {

        console.log("congratulations")
    }
        //userGuessedRight = true {
        if (guess > NumberChosen) {
            console.log("too high! try again ")
        }
        //userGuessedRight = {
        if (guess < NumberChosen) {
            console.log("too low! try again ")
        }
        //userGuessedRight = true {
    }







// while (!userGuessedRight) {
//     let guess = readline.question("What is your guess?")
//     if (guess == NumberChosen) {
//         console.log("congratulations")
//         userGuessedRight = true
//console.log(guess)to see what i typed - will guess the same number i put
//while(!userGuessedRight) {
   //console.log("What is your guess?")
//}
