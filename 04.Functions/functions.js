function nice(name) {
    console.log("Hey! " + name + " you are a nice guy.");
    console.log("Hey! " + name + " you are good guy.");
    console.log("Hey! " + name + " you are a beautiful guy.");
    console.log("Hey! " + name + " you are tallent is soo good.");
}
// nice("Saif");

function sum(a, b, c = 3) {
    // console.log(a + b);
    return a + b + c;
}
result_1 = sum(5, 7);
result_2 = sum(5, 78);
result_3 = sum(5, 24, 1);
console.log("The sum of these two numbers is:", result_1);
console.log("The sum of these two numbers is:", result_2);
console.log("The sum of these two numbers is:", result_3);

// arrow function
const func1 = (x)=>{
    console.log("I am an arrow function", x)
}
func1(23);
func1(79);
func1(34);

// Functions Used as Variables
function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}
let x = toCelsius(78);

// let text = "The temperature is " + x.toFixed(2) + " Celsius";
// console.log(text);

console.log("The temperature is " + toCelsius(77).toFixed(2) + " Celsius.");

function sayHello(){
    return "Hello World"
}
document.getElementById("demo").innerHTML = sayHello();

