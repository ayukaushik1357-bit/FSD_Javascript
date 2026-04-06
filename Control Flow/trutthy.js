const userEmail = "ayus@gmail.com"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Dont get user email");
}


/* Falsy values :-
false,  0,  -0,  BigInt,  0n,  "",  null,  undefined,  NaN
 
Truthy values :-
"0",  'false',  " ",  [],  {},  function(){},  
*/

const user = []
if(user.length === 0){
    console.log("Array is empty");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??)

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);


// Ternary operator:- condition?true:false
const icePrice = 100
icePrice >= 80 ? console.log("less than 80") : console.log("more than 80");

