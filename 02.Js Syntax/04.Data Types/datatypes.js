// 1. String Data Type

document.write("<h2>1. String Data Type in JavaScript</h2>");

let x = "Saif";

document.write('Data Type of "Saif" is: ' + typeof x);

document.write("<hr>");


// 2. Number Data Type

document.write("<h2>2. Number Data Type in JavaScript</h2>");

let y = 34;

document.write("Data Type of 34 is: " + typeof y);

document.write("<hr>");


// 3. Number (Decimal) Data Type

document.write("<h2>3. Number (Decimal) Data Type in JavaScript</h2>");

let z = 23.3;

document.write("Data Type of 23.3 is: " + typeof z + "<br>");
document.write("Floating-point numbers also have the <b>number</b> data type in JavaScript.");

document.write("<hr>");


// 4. Boolean Data Type

document.write("<h2>4. Boolean Data Type in JavaScript</h2>");

let a = true;
let b = false;

document.write("Data Type of true is: " + typeof a + "<br>");
document.write("Data Type of false is: " + typeof b);

document.write("<hr>");


// 5. Undefined Data Type

document.write("<h2>5. Undefined Data Type in JavaScript</h2>");

let c = undefined;
let d;

document.write("Data Type of undefined is: " + typeof c + "<br>");
document.write("Data Type of d is: " + typeof d);

document.write("<hr>");


// 6. Null Data Type

document.write("<h2>6. Null Data Type in JavaScript</h2>");

let e = null;

document.write("Data Type of null is: " + typeof e + "<br>");
document.write("<b>Note:</b> typeof null returns <b>object</b>. This is a historical bug in JavaScript.");

document.write("<hr>");


// 7. Array Data Type

document.write("<h2>7. Array Data Type in JavaScript</h2>");

let array = ["Saif", 34, "Hasnat"];

document.write("Array: " + array + "<br>");
document.write("Data Type: " + typeof array + "<br>");
document.write("Is Array? " + Array.isArray(array));

document.write("<hr>");


// 8. Object Data Type

document.write("<h2>8. Object Data Type in JavaScript</h2>");

let student = {
    name: "Saif",
    age: 21,
    city: "Sahiwal"
};

document.write("Student Name: " + student.name + "<br>");
document.write("Student Age: " + student.age + "<br>");
document.write("Student City: " + student.city + "<br>");
document.write("Data Type: " + typeof student);

document.write("<hr>");