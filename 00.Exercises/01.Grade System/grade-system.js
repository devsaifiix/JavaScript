let total_marks, obtained_marks, marks_Per;

total_marks = Number(prompt("Enter Total Marks:"));
obtained_marks = Number(prompt("Enter Obtained Marks:"));

marks_Per = (obtained_marks / total_marks) * 100;

if (marks_Per > 90 && marks_Per <= 100) {
    document.write("Your Grade is A+ with Marks Percentage: " + marks_Per.toFixed(2) + "%");
}
else if (marks_Per > 70 && marks_Per <= 90) {
    document.write("Your Grade is B with Marks Percentage: " + marks_Per.toFixed(2) + "%");
}
else if (marks_Per > 50 && marks_Per <= 70) {
    document.write("Your Grade is C with Marks Percentage: " + marks_Per.toFixed(2) + "%");
}
else if (marks_Per > 40 && marks_Per <= 50) {
    document.write("Your Grade is D with Marks Percentage: " + marks_Per.toFixed(2) + "%");
}
else if (marks_Per >= 0 && marks_Per <= 40) {
    document.write("Your Grade is F with Marks Percentage: " + marks_Per.toFixed(2) + "%");
}
else {
    document.write("Invalid Marks! Please enter valid marks.");
}