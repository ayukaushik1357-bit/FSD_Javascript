//  Primitive
// 7 -> string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // False

// Non Primitive
// Array, Objects, Functions

const heros = ["shaktiman","naag","dogesh"];
let obj = {
    name: "Ayush",
    age: 21,
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof myFunction);  //function
console.log(typeof heros);  // object