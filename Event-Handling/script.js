

let h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
h1.style.color = "red";
h1.textContent = "It Works"
}
)

let h2 = document.querySelector("h2");

h2.addEventListener("dblclick" , function(){
h2.textContent = "Double Clicking...";
h2.style.color = "pink";
})


let input = document.querySelector("input");

// input.addEventListener("input", function(dets){
// console.log(dets.data);
// // console.log("typed")
// })

input.addEventListener("input", function(details){
if(details.data !== null){
    console.log(details.data)
}
}) //add event listener and get data on console

let p = document.querySelector("p");

 function click(){
p.style.color = "green";
}
p.addEventListener("click" , click);

p.removeEventListener("click", click) //remove event listener


//change event 



let sel = document.querySelector("select");
let device = document.querySelector(".device");

sel.addEventListener("change",function(dets){
    // console.log(dets.target.value);
   
    device.textContent = `${dets.target.value} Device Selected`;
    console.log(`${dets.target.value} Device Selected`)

})
 


