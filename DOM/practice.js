let h1 = document.querySelector("h1");

h1.textContent = "Ayush Nirwal";


let all = document.querySelector("ul");

all.textContent = "changed";


let changeColor = document.querySelector("h1");

changeColor.style.color = "red";

h1.textContent = "Mansi Nirwal ";


let text = document.querySelector("h3");

text.innerHTML = "Changed Something ";


let item = document.querySelector("img")

item.setAttribute("alt", "mansi");

item.removeAttribute("alt");

// item.getAttribute("src");


let newitem = document.createElement("h2");

newitem.textContent = "Frontend Developer";

document.querySelector("ul").prepend(newitem);



let ri = document.querySelector("img");

document.querySelector("body").removeChild(ri);


let h4 = document.querySelector("h4");

h4.style.color="green";

h4.classList.add("green");

h1.classList.add("green");

h1.classList.toggle("green");


let body = document.querySelector("body");

body.classList.add("green");
