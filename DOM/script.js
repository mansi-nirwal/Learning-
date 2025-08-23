// DOM :> Document Object Model 

let h1 = document.querySelector("h1");

h1.innerHTML ="hello mansi";

h1.textContent= "Text Content on Page";

h1.hidden = true;


// Set Attribute

let a = document.querySelector("a");

// a.href= "www.apple.com"

// a.setAttribute("href", "https://www.apple.com")

console.log(a.getAttribute("href"));

a.removeAttribute("href") //remove the href attribute

let create = document.createElement("h1");
 
create.textContent = "Mansi Nirwal ";

document.querySelector("body").append(create);


// create.remove();

//js se css me change 

create.style.color="red";

create.style.fontFamily="cursive";

console.dir(create);

create.classList.add("hulu")//add class on tag

create.classList.toggle("hulu"); //toggle :> agar class lagi hai to hata do aur nhi lgi to laga do

let li = document.querySelector("ul");

li = document.createElement("li");

li.textContent = "new Task";

document.querySelector("ul").append(li);

let item = document.querySelector("#abcd");

item.remove();

let ri = document.querySelector("li");

ri.remove();

