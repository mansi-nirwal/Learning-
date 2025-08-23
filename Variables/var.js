//let var const


var num = 2334;

var num = 334;

const num =23;

// Declaration and Initialization

var first_name; //declaration

var name = "Mansi"; // initialization

/*
var properties;

window me add hota hai

function scoped hota hai 

firse declare kar sakte hai same name se and error nahi aayega 
*/


const name="Mansi Nirwal";
//can't change const value its fixed


//Scope(global, block, functional)

function ab(){
    var n=23;
}//functional 

var n=23; // global scope 

{
    let n=23; //block scope 

}


//Temporal Dead Zone ********
//tdz utna area jitne me js ko pata to hai ki variable exist karta hai pr wo aapko value nahi de sakta ;



console.log(a);

let n =  13;


// Hoisting ??????
// ek variable ko jab js mein banaate hai to wo variable ko do hisse mein toot jata hai uska declare part upar chala jata hai aur uska intialization part neeche reh jata hai jese

// var a= 23;

var a = undefined; // a declare se pehle access hojayega aur undefined aayega 
 

a = 12;


// Var ko function se bahar access nahi kar sakte 

// let ko curly braces se bahar access nahi kar sakte
 



