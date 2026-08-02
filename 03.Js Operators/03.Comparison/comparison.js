let x = 10;
let y = 20;
let z = "10";

document.write("x = ", x + "<br>");
document.write("y = ", y + "<br>");
document.write('z = "', z, '" (String)<br><br>');

let equal = x == z;
document.write("x == z: ", equal + "<br>");

let strictEqual = x === z;
document.write("x === z: ", strictEqual + "<br>");

let notEqual = x != y;
document.write("x != y: ", notEqual + "<br>");

let strictNotEqual = x !== z;
document.write("x !== z: ", strictNotEqual + "<br>");

let greaterThan = x > y;
document.write("x > y: ", greaterThan + "<br>");

let lessThan = x < y;
document.write("x < y: ", lessThan + "<br>");

let greaterThanEqual = x >= 10;
document.write("x >= 10: ", greaterThanEqual + "<br>");

let lessThanEqual = x <= y;
document.write("x <= y: ", lessThanEqual + "<br>");

console.log(null == undefined);     // return true
console.log(null === undefined);    // return false