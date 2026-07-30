// Example 1: Normal For Loop

document.write("<h2><i>Example 1: Normal For Loop</i></h2>");

for (let i = 1; i <= 10; i++) {
    document.write("The number is: " + i + "<br>");
}

document.write("<hr>");

// Example 2: break Statement

document.write("<h2><i>Example 2: break Statement</i></h2>");

let message = "Hello Saif";

for (let i = 1; i <= 5; i++) {

    if (i == 3) {
        break;
    }

    document.write(i + " : " + message + "<br>");
}

document.write("<hr>");

// Example 3: Ternary Operator

document.write("<h2><i>Example 3: Ternary Operator (Even / Odd)</i></h2>");

for (let a = 1; a <= 10; a++) {

    let result = (a % 2 == 0) ? "Even" : "Odd";

    document.write(a + " : " + result + "<br>");
}

document.write("<hr>");

// Example 4: Initialization Outside the Loop

document.write("<h2><i>Example 4: Initialization Outside the Loop</i></h2>");

let j = 0;

for (; j <= 5; j++) {
    document.write("The number is: " + j + "<br>");
}

document.write("<hr>");

// Example 5: Increment Inside the Loop

document.write("<h2><i>Example 5: Increment Inside the Loop</i></h2>");

let k = 1;

for (; k <= 5;) {
    document.write("The number is: " + k + "<br>");
    k++;
}

document.write("<hr>");