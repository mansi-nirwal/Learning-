//Data Types + Type System

// Primitives :> aise saari values jinko copy karne par real copy mil jaye 
//String , number ,, boolean , null , undefined, symbol, bigint 

// Reference -> inko copy krne par real copy nahi milegi but aapko reference milega parent ka 
// array, objects , functions 

let name = 'Mansi '; //String

let num = 1023; //num

let val = true;

let last_name = null;

let roll_no = undefined;


// symbol -> unique immutable value 

// let sheryjs = {
//     uid: 12,
//     model:"Mansi"
// }
// sheryjs.uid = 1; overright kardiya uid ki value

let u1 = Symbol("uid")
let u2 = Symbol("uid")


let sheryjs = {
    uid: 12,
    model:"Mansi"
}
Symbol("uid") = 2343;


// Big Int  :> Last me N lgana hota hai 

let a = 39384938947384n;

a + 234n;

// Dynamic Typing :> js me static typing nahi hai yaha par dynamic typing jiska mtlb hai aap data ko change kar skte ho kyuki yha dynamic data types hai:

let dynamic = 12;
dynamic = "mansi";
dynamic = true; 


// Type Coercion :>  ek type automatically convert hojayega

 "5" + 1; // '51'

 "5" - 1; // 4


 // Truthy vs Falsy values
// !!"" - false 
// !! Nan - false

 

