/*
DOM

-- What is dom
-- Dom selectors
-- Find Elelment By Id
-- Find Element By tag Name
-- Find Elelment By Class name
-- Find Element By Css Selectors
-- Find Element By Collection
-- Title
-- Body
-- Images
-- Forms
-- Links
*/
/*
let myIdElment = document.getElementById("myDiv");
let myTagElment = document.getElementsByName("p");
let myClsseElement = document.getElementsByTagName("mySpan");
let myQueryElment = document.querySelector(".spacial");
let myQueryAllElment = document.querySelectorAll(".spacial");

console.log(myIdElment);
console.log(myTagElment[1]);
console.log(myClsseElement);
console.log(myQueryElment);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
--------------------------------------------
*/

/*
DOM
[get / Set Element Conent And Attributes]
-- innterHTML
-- textContent
-- Change Attributes Directly
-- Change Attributes With Methods
-- GetAttribute
-- SetAttribute

Search
-- innterText
*/
/*
let myElement = document.querySelector(".js");
console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text from <span>dom.js</span> File"; // With Tag
myElement.textContent = "Text from <span>dom.js</span> File"; // As text

document.images[0].src = "";
document.images[0].alt = "Images";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("href"));
console.log(myLink.getAttribute("class"));

myLink.setAttribute("href", "https://google.com");
myLink.setAttribute("title", "Google");
--------------------------------------------
*/

/*
 DOM [Checj Attributes]
 -- Element.attributes
 -- Element.hasAttribute
 -- Element.hasAttributes
 -- Element.removeAttribute
*/

/*
console.log(document.getElementsByTagName("p")[0].attributes);
let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
    } else {
        myP.setAttribute("data-src", "New value")
    }
} else {
    console.log("Not found");
}

if (myP.hasAttributes()) {
    console.log("P Has attr");
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log("div Has attr");
} else {
    console.log("div No attr");
}
-----------------------------
*/

/*
  DOM [Create Element]
  -- createElemnt
  -- createComment
  -- createTextNode
  -- createAttribute
  -- appendChild
*/
/*
let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myCommnent = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "test");

// Append Text To Element
myElement.appendChild(myText);

// Append Comment To Element
myElement.appendChild(myCommnent);

// Append Elenmt To Body

document.body.appendChild(myElement);
console.log(myElement);
*/

/*
DOM [Create Elements]
-- Practice Product With Heading And Paragraph
*/
/*
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myP = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myPText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element;
myMainElement.appendChild(myHeading);

// Add P Text
myP.appendChild(myPText);

// Add P to Main Element;
myMainElement.appendChild(myP);

myMainElement.className = "product";

document.body.appendChild(myMainElement);
*/

/*
 DOM [Deal With Children]
 -- children
 -- childNodes
 -- firstChild
 -- lastChild
 -- firstElementChild
 -- lastElementChild
*/
/*
let myElemnt = document.querySelector("div");
console.log(myElemnt);
console.log(myElemnt.children);
console.log(myElemnt.children[0]);
console.log(myElemnt.childNodes); // Elment with Text
console.log(myElemnt.childNodes[0]);
console.log(myElemnt.firstChild);
console.log(myElemnt.lastChild);
console.log(myElemnt.firstElementChild);
console.log(myElemnt.lastElementChild);
*/

/*
 DOM [Events]
 -- Use Events On HTML
 -- User Event On Js
 -- onclick
 -- pncontextmenu
 -- onmouseenter
 -- onmouseleave

 -- onloead
 -- onscroll
 -- onresize

 -- onfocus
 -- onblur
 -- ondubmit
*/
/*
let myBtn = document.getElementById("btn");
myBtn.onclick = function() {
    console.log('Click');
}

window.onscroll = function() {
    console.log("Scroll");
}
*/

/*
 DOM [Events]
 -- Validate Form Practice
 -- Prevent Default
 */
/*
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

console.log(ageInput);

document.forms[0].onsubmit = function(e) {
    let userValid = false;
    let ageValid = false;

    if (userValid === false || ageValid === false) {
        e.preventDefault();
    }

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    if (ageInput.value !== "") {
        ageValid = true;
    }
}

document.links[0].onmouseenter = function(e) {
    console.log(e);
    e.preventDefault();
}
*/

/*
DOM [Events Simulation]
-- click
-- focus
-- blur
*/
/*
let two = document.querySelector(".two");
let one = document.querySelector(".one");

window.onload = function() {
    two.focus();
}

one.onblur = function() {
    // document.links[0].click();
}
*/

/*
DOM [Class List]
-- classList
-- length
-- contains
-- item(index)
-- add
-- remove
-- toggle
*/
/*
let myElement = document.getElementById("myDiv");

console.log(myElement.classList);
console.log(typeof myElement.classList);

console.log(myElement.classList.contains("drmas"));
console.log(myElement.classList.contains("one"));

console.log(myElement.classList.item("2"));

myElement.onclick = function() {
    //  myElement.classList.add("addOne", "addTwo");
    myElement.ontoggle("drmas")
}
*/

/*
  DOM [CSS]
  -- Style
  -- csstext
  -- removeProperty(propertyName) [Inline, Stylesheet]
  -- setProperty(propertyName, Value, property)
*/
/*
let myElement = document.getElementById("myDiv");

myElement.style.color = "red";
myElement.style.fontWeight = "bold";
myElement.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

myElement.style.removeProperty("color");
myElement.style.setProperty("font-size", "40px", "!important");

document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "red");
*/

/*
 DOM [Deal With Elements]
  -- before [Elment || String]
  -- after [Elment || String]
  -- append [Elment || String]
  -- prepend [Elment || String]
  -- remove
*/
/*
let myElement = document.getElementById("myDiv");
let createP = document.createElement("p");

myElement.before("Hello From Js Before");
myElement.after("Hello From After");
myElement.before(createP);

myElement.append("Hello From Append");
myElement.prepend("Hello From Prepend");

myElement.remove();
*/

/*
DOM [Traversing]
 -- nextSibling
 -- previousSibling
 -- nextElementSibling
 -- previousElemntSibling
 -- parentElement
*/
// let myElement = document.getElementById("myDiv");

/*
DOM [Cloning]
-- cloneNode(Deep)
*/
/*
let myElement = document.getElementById("myDiv");
let myP = document.querySelector("p").cloneNode(true);

myElement.appendChild(myP);
*/

/*
 DOM [Add Event Listener]
 -- addEventListener
 -- Use Without On
 -- Attach Multipe Events
 -- Error Test

 Search
   -- Capture & Bubbling JS
   -- removeEventLListener
*/
/*
let myP = document.querySelector("p");

myP.onclick = one;

function one() {
    console.log("Message From Onclick 1");
}

function two() {
    console.log("Message From Onclick 2");
}

window.onload = "Drmas";

myP.addEventListener("click", function() {
    console.log("Message From Onclick Event");
})

myP.addEventListener("click", one());
myP.addEventListener("click", two());

myP.onclick = function() {
        let newP = myP.cloneNode(true);
        newP.className = "clone"
        document.body.appendChild(newP);
    }

    let cloned = document.querySelector(".clone");

    cloned.onclick = function() {
        console.log("Iam Cloned");
    }


document.addEventListener("click", function(e) {
    if (e.target.className === 'clone') {
        console.log(e.target);
        console.log("Iam Cloned");
    }
}); 
*/