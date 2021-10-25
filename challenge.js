/*
Arrays Challenges

console.log("Arrays Challenges");
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Ossama", "Gamal", "Ameer"];

// Write code here
console.log(my);
my.shift();
my.pop();
my.pop();
my.unshift("Ameer")
console.log(my.reverse()); // ["Ossama", "Elham", "Mazero", "Ameer"]
let a = my.slice(++zero, -zero);
console.log(a); // ["Elham", "Mazero"]
my.unshift("Elzero");
console.log(my.shift()); // "ElZero"
console.log(a[+zero][++counter] + my[--zero][-zero]); // "ro"
*/

/*
  Loop Challenge


let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];


document.write(`<h1>Team Members</h1>`);

if (myAdmins.indexOf("Stop") !== -1) {
    myAdmins.length = myAdmins.indexOf("Stop");
}
document.write(`<div>We have ${myAdmins.length} admins </div>`);
document.write('<hr style="color: red">');
for (let i = 0; i < myAdmins.length; i++) {
    document.write(`<div>The Admin for team ${i+1} is ${myAdmins[i]} admins </div>`);
}
document.write('<hr style="color: red">');
*/