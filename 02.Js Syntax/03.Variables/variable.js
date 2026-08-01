// Example using var
document.write("<h2>1. Varibales in js by using var</h2>")
var d = "Saif Tahir";
var age = 34;
// var age = 50;   // you can redeclare a variable by using var
age = 25;   // var can be override the value of age
document.write("Your name is: ", d + "<br>", "Your age is: ", age);

// Example using let
document.write("<h2>2. Varibales in js by using let</h2>")
let x = 5;
// let x = 6;      // you can't redeclare a variable by using let
x = 6;      // but you can reassign a value a to variable by using let
document.write( "Value of x is: ", x)

// Example using const
document.write("<h2>3. Varibales in js by using const</h2>")
const a = 5;
// const a = 10; // you can't redeclare a variable by using const
// a = 20; // also you can't reassign a value to a variable by using const
document.write("Value of a is: ", a);

let _lastName = "Tahir";


// Declaring a Variable using const
const carName = "Honda Civic";
const price1 = 5;
const price2 = 6;

const total = price1 + price2;

console.log(carName);
console.log(total);

// One Statement, Many Variables
let person = "Tahir", _carName = "Grandy", price = 8000000;