document.write("<h2>Example 1: Normal For Loop</h2>");
for (let i = 1; i <= 10; i++) {
    document.write("The numbber is: " + i + "<br>");
}
document.write("<hr>");

let a = "Hello Saif";
for (i = 1; i <= 5; i++){
    if (i == 3){
        // document.write(i + " : " +  "Hello Devloper" + "<br>");
        // continue;
        break;
    }
document.write(i + ":" + a + "<br>");
}
document.write("<hr>");

for(let a = 1; a <= 10; a++){
  let b = (a % 2 == 0) ? 'Even' : 'ODD';
document.write( a + ' : ' + b + '<br>');
}
document.write("<hr>");

document.write("<h2>Example 2: Initialization Outside the Loop</h2>");
let j = 0;
for (; j <= 5; j++) {
    document.write("The number is: " + j + "<br>")
}
document.write("<hr>");

document.write("<h2>Example 3: Increment Inside the Loop</h2>");
let k = 1;
for (; k <= 5;) {
    document.write("The number is: " + k + "<br>");
    k++;
}
document.write("<hr>");