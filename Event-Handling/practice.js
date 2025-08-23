
//This code print all words that we type on window:::

let h1 = document.querySelector("h1")

window.addEventListener("keydown",function(dets){

    console.log(dets)
    if(dets.key === " "){
      h1.textContent = "Space";
    
    }
    else{
    console.log(dets.key)
    h1.textContent = dets.key;
    }

})

// Custom input upload button


