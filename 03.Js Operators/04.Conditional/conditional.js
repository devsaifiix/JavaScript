// // The if Statement
// let temperature = prompt("Enter a temperature: ")

// if (temperature > 25){
//     console.log("It is hot day.")
// }

// // The else Statement
// if ((temperature > 0) && (temperature < 30)){
//     console.log("It is cold day.")
// }else{
//     console.log("It is hot day.")
// }

// // The else if Statement
// if ((temperature > 0) && (temperature <= 15)){
//     console.log("It is very vey cold day.")
// }else if ((temperature > 15) && (temperature <=30)){
//     console.log("It is moderate cold day.")
// }else if ((temperature > 30) && (temperature <= 45)){
//     console.log("It is a hot day.")
// }else if ((temperature > 45) && (temperature <=60)){
//     console.log("It is very very hot day.")
// }else{
//     console.log("Enter a suitable temperature.")
// }

// // The switch Statement
// const Grade = 'E';

// switch(Grade){
//     case 'A':
//         console.log('A --> is very good');
//         break;
//     case 'B':
//         console.log('B --> Good, keep learning');
//         break;
//     case 'C':
//         console.log('C -->Need impovements');
//         break;
//     case 'D':
//     // case 'E':
//         console.log('D --> Not Good');
//         break; 
//     default:
//         console.log('Invalid Grade');      
// }

// Ternary Operator (? :) in JavaScript
let num = prompt("Enter a number: ")

let result = (num%2 == 0) ? "Even Number" : "Odd Number"
console.log(result)