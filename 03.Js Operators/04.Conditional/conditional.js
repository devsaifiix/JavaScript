// The if Statement

document.write("<h2>1. The if Statement</h2>");

let temperature = Number(prompt("Enter a temperature:"));

if (temperature > 25) {
    document.write("It is a hot day.");
}

document.write("<hr>");


// The else Statement

document.write("<h2>2. The else Statement</h2>");

if (temperature > 0 && temperature < 30) {
    document.write("It is a cold day.");
} else {
    document.write("It is a hot day.");
}

document.write("<hr>");


// The else if Statement

document.write("<h2>3. The else if Statement</h2>");

if (temperature > 0 && temperature <= 15) {
    document.write("It is a very very cold day.");
}
else if (temperature > 15 && temperature <= 30) {
    document.write("It is a moderate cold day.");
}
else if (temperature > 30 && temperature <= 45) {
    document.write("It is a hot day.");
}
else if (temperature > 45 && temperature <= 60) {
    document.write("It is a very very hot day.");
}
else {
    document.write("Enter a suitable temperature.");
}

document.write("<hr>");


// The switch Statement

document.write("<h2>4. The switch Statement</h2>");

let grade = prompt("Enter your Grade (A, B, C, D):").toUpperCase();

switch (grade) {

    case "A":
        document.write("A → Very Good");
        break;

    case "B":
        document.write("B → Good, Keep Learning");
        break;

    case "C":
        document.write("C → Needs Improvement");
        break;

    case "D":
        document.write("D → Not Good");
        break;

    default:
        document.write("Invalid Grade");
}

document.write("<hr>");


// Ternary Operator

document.write("<h2>5. Ternary Operator (? :)</h2>");

let num = Number(prompt("Enter a number:"));

let result = (num % 2 == 0) ? "Even Number" : "Odd Number";

document.write("Result: " + result);

document.write("<hr>");