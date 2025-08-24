//This code print all words that we type on window:::

// let h1 = document.querySelector("h1")

// window.addEventListener("keydown",function(dets){

//     console.log(dets)
//     if(dets.key === " "){
//       h1.textContent = "Space";

//     }
//     else{
//     console.log(dets.key)
//     h1.textContent = dets.key;
//     }

// })

// Custom input upload button

let btn = document.querySelector(".btn");

let inp = document.querySelector("input");

btn.addEventListener("click", function (dets) {
  inp.click();
});

inp.addEventListener("change", function (dets) {
  const file = dets.target.files[0];

  if (file) {
    btn.textContent = file.name;
  }

  // console.log(dets.target.files[0].name);
  // btn.textContent = dets.target.files[0].name;
});

let form = document.querySelector("form");

let input = document.querySelectorAll("input");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  console.log(
    input[0],
    input[1].value,
    input[2].value,
    input[3].value,
    input[4].value
  );
});
