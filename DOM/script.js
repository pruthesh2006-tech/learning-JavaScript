// console.dir(window);
// console.dir(window.document);
// console.dir(document.body);
// console.log(document.body);

// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings); 

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// -> query selector  => returns node list
// let firstElem = document.querySelector(".myClass");
// console.dir(firstElem);

// let allElem = document.querySelectorAll(".myClass");
// console.dir(allElem);


//->  query selector for id

// let firstElem = document.querySelector("#myId");
// console.dir(firstElem);

// console.dir(document.body.firstChild);

// inner text
// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");


// -> attributes in dom

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));


// -> style
// let div = document.querySelector("div");


// => insert elements

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let p = document.querySelector("p");
// p.after(newBtn);


// -> create a new heading
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am learning JS!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();