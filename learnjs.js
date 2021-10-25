/*
Arrays Methods [String]
-- Slice(Start [opt], End [opt] Not Including End)
-- slice() => All Array
-- If Start is undefind => 0
-- Negative count from End
-- If End Is Undefind || > Indexes => Slice to the end array.length
-- Return new array
-- splice(Start [mand], DeleteCount [opt] [0 no remove], the Items to add [opt])
-- If negative =< Start from the end

let myFriends = ["Ahmed", "Sayed", "Aly", "Ossama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));

myFriends.splice(1, 2, "Sameer", "Samara")
console.log(myFriends);
----------------------------------------------------------
*/


/*
Arrays Methods [Joining]
-- conczt(array, array) => return a new array
-- join(separator)

let myFriends = ["Ahmed", "Sayed", "Aly", "Ossama", "Gamal", "Ameer"];
let myNewFriends = ["Samaer", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gamal", [1, 2]);

console.log(allFriends.join());
console.log(allFriends.join(" | ").toLowerCase());
-----------------------------------------------------
*/

/*
Loop
For
for([1] [2] [3]) {
    // Block of code
}

for (let i = 0; i < 10; i++) {
    console.log(i);

}
---------------------------------------------
*/

/*
Loop on sequences

let myFriends = [1, 2, "Drmas", "Ahmed", "Sayed", "Aly", "Ossama", "Gamal", "Ameer"];

let NameOnly = [];

if (typeof myFriends[0] === 'string') {
    NameOnly.push(myFriends[0]);
}
if (typeof myFriends[1] === 'string') {
    NameOnly.push(myFriends[1]);
}
if (typeof myFriends[2] === 'string') {
    NameOnly.push(myFriends[2]);
}
if (typeof myFriends[3] === 'string') {
    NameOnly.push(myFriends[3]);
}

for (let index = 0; index < myFriends.length; index++) {
    if (typeof myFriends[index] === 'string') {
        NameOnly.push(myFriends[index]);
    }
}

console.log(NameOnly);

____________________________________________
*/

/*
  Nested loops

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];
for (let index = 0; index < products.length; index++) {
    console.log("#".repeat(15));
    console.log(`# ${products[index]}`);
    console.log("#".repeat(15));

    console.log("Colors:");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);

    }

    console.log("Models:");
    for (let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);

    }
}
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
*/


/*
Loop control
-Break
-Continue
-Labek

let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];
let colors = ["Red", "Green", "Black"];
mainLoop:
    for (let index = 0; index < products.length; index++) {
        if (typeof products[index] === "number") {
            continue
        }
        console.log(products[index]);
        nestedLoop:
            for (let j = 0; j < colors.length; j++) {
                if (colors[j] === "Green") {
                    break mainLoop;
                }

            }
    }
    */


/*
 Loop for advanced example

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;
for (;;) {
    console.log(products[i]);
    i += 2;
    if (i === products.length) break;
}
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
*/

/*
  Loop
  -While

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

while (i < products.length) {
    console.log(products[i]);
    i++;
}
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
*/


/*
  Loop
  - do / while

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;
do {
    console.log(i);
    i++;
}
while (false);
console.log(i);

*/

/*
  Function
  - What is function
  - User defined vs built in
  - Syntax + basic Usage
  - Example From real Life
  - Parameter + Argument
  - Practicam example

function sayHello(userName, age) {
    if (age < 20) {
        console.log("app is not suitable for you");
    } else {
        console.log(`Hello Mr ${userName} Your age is ${age}`);
    }
}
sayHello("Drmas", 33);
sayHello("Osama", 23);
sayHello("Nina", 12);


function generateYour(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
    }
}

generateYour(1984, 2021, 2020);
******$$*********************************
*/

/*
 Function
 - return
 - Automatic Semicolon Insertaion [No Line Terminator allowed]
 - Interruptting

function calc(start, end) {
    for (let index = start; index <= end; index++) {
        console.log(index);
        if (index === 15) {
            return "Interruptting";
        }
    }
}

calc(10, 30);
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/

/*
   function
   default Funcation parameters
   function parameters default [Undefind]
   Old strategies [Condition + Logical or]
   Es6 Method 

function sayHello(username, age = "Unknown") {
    // if(age===undefined) {
    //  age = "Unknown"
    // }
    // age = age || "Unknown";
    return `Hello ${username} Your age is ${age}`
}

console.log(sayHello("Drmas"));
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/

/*
 Funcation
 - Rest parameters
 - only one allowed
 - must be last elemnt
function calc(...numbers) {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }

    return `Finam Result is ${res}`;
}
console.log(calc(10, 20, 10, 30, 50));
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/

/*
  Function advanced Practice
  - PAramters
  - Default
  - Rest
  - Loop
  - Condition

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write("<div>");
    document.write(`<h2> Welcome ${us} </h2>`);
    document.write(`<h5> Age ${ag} </h5>`);
    document.write(`<h5> Hour Rate $${rt} </h5>`);

    if (show === "Yes") {
        if (sk.length > 0) {
            document.write(`<h5>Skills: ${sk.join(" | ")} </h5>`);
        } else {
            document.write(`<h5>Skills: No Skills</h5>`);
        }

    } else {
        document.write(`<h5> Skills is hidden </h5>`);
    }

    document.write("</div>");
}

showInfo("Drmas", 37, 20, "Nos", "Html", "Css");
*/

/*
Function 
- Anonymous Function
- Calling Named function Vs Anonymous Function
- Argument to other function
- Task without name
- SetTimout

let calculator = function(num1, num2) {
    return num1 + num2;
}

console.log(calculator(10, 20));

document.getElementById("show").onclick = function() {
    console.log("Show");
}

setTimeout(function good() {
    console.log("Good");
}, 2000)
++++++++++++++++++++++++++++++++++++++++++++++++
*/

/*
function
- Function Inside Function
- Return Function
*/
/*
// Examp 1
function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested function
    function canatMes() {
        message = `${message} ${fName} ${lName}`;
    }

    canatMes();
    return message;
}

console.log(sayMessage("Issam", "Drmas"));
*/
//Example 2
/*
function sayMessage(fName, lName) {
    let message = `Hello`;

    function canatMes() {
        return `${message} ${fName} ${lName}`;
    }
    return canatMes();
}
console.log(sayMessage("Issam", "Drmas"));

//Example 3
function sayMessage(fName, lName) {
    let message = `Hello`;

    function canatMes() {
        function getFullName() {
            return `${fName} ${lName}`;
        }
        return `${message} ${getFullName()}`;
    }
    return canatMes();
}
console.log(sayMessage("Issam", "Drmas"));
*/

/*
 Function
 - Arrow Funcation
 - Regular vs Arrow [Param + no Param]
 - multipe lines
let print = (num) => {
    return num;
}
console.log(print(1));
++++++++++++++++++++++++++++++++++++++++
*/

/*
Scope
- Global And Local scope

var a = 1;
let b = 2;

console.log(`Function - From Global ${a}`);
console.log(`From Global ${b}`);

function showText() {
    console.log(`Function - From Global ${a}`);
    console.log(`Function - From Global ${b}`);
    var a = 1;
    let b = 2;

}
showText();
*/


/*
Scope
- Block of scope [if, switch, for]

var x = 10;

if (10 === 10) {
    let x = 50;
}
console.log(x);

var a = 1;
let b = 2;

function showText() {
    var a = 1;
    let b = 2;
    console.log(`Function - From Global ${a}`);
    console.log(`Function - From Global ${b}`);
}
*/


/*
  Scope
  - Lexical Scope

  Search 
  - Execution context
  - Lexical Environment

function parent() {
    let a = 10;

    function child() {
        console.log(a);

        function grand() {
            let b = 100;
            console.log(a);
        }
        grand();
    }
    child();
}
parent()
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/

/*
 Higher Order functions
 --
 Map

let nums = [1, 2, 3, 4, 5, 6];
let newArray = [];
for (let i = 0; i < nums.length; i++) {
    newArray.push(nums[i] + nums[i])
}

console.log(newArray);

let addSelf = nums.map((a) => a + a);
console.log(addSelf);

function addition(ele) {
    return ele + ele;
}

let add = nums.map(addition);
console.log(add);
*/


/*
Map
- Swap Cases
- Inverted numbers
- Ignore Boolean value
let swappingcases = "elZERo";
let invertedNumbers = [1, -10, 10, 100, -30];
let ignoreBooleans = "Elz123er4o";

let sw = swappingcases.split("").map(function(ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");
console.log(sw);

let inv = invertedNumbers.map(function(ele) {
    return -ele;
});
console.log(inv);

let ign = ignoreBooleans.split("").map(function(ele) {
    return isNaN(parseInt(ele)) ? ele : "";
}).join("");

console.log(ign);
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/

/*
Filter
--- method creates a new array
--- with all elements that pass the test implemented by the provided function
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let numbers = [11, 20, 2, 5, 17, 10];

let addMap = numbers.map(function(el) {
    return el + el;
})
console.log(addMap);

let addFilter = numbers.filter(function(el) {
    return el + el;
})
console.log(addFilter);

let filterFriends = friends.filter(function(el) {
    return el.startsWith("A") ? true : false;
})
console.log(filterFriends);

let eventNum = numbers.filter(function(el) {
    return el % 2 === 0 ? true : false;
})
console.log(eventNum);
*/

/*
 Filter 
 - filter Longest Word By Number
// Filter words more than 4 Characters
let sentence = "I Love Food Code Too Playing Mush";
let smallWords = sentence.split(" ").filter(function(el) {
    return el.length <= 4;
}).join(" ")
console.log(smallWords);

let mix = "A13BS2ZX";
let mixedConent = mix.split("").filter(function(el) {
    return !isNaN(parseInt(el));
}).map(function(el) {
    return el * el;
}).join("");

console.log(mixedConent);
*/


/*
Reduce
-- method executes a reducer functions on each element of the array
-- resulting in a single output value.

let nums = [10, 20, 15, 30];

let add = nums.reduce(function(acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Current => ${current}`);
    console.log(`Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc + current);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%");
    return acc + current;
}, 5);

console.log(add);
*/

/*
forEach:


let allLists = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

console.log(allLists);

allLists.forEach(function(li) {
    li.onclick = function() {

        allLists.forEach(function(li) {
            li.classList.remove("active")
        })
        this.classList.add("active");

        allDivs.forEach(function(div) {
            div.style.display = 'none';
        })

    }
})

*/