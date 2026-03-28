// alert(3+3); we are using nodejs, not browser

let a = 15;
let name = "Ayush"
let isLoggedIn = false;

console.log(typeof "Ayush"); //string
console.log(typeof null);  //object
console.log(typeof undefined);  //undefined


// **********NUMBER CONVERSION***********

/*let score = null
let score = undefined
let score = true
let score = "Ayush"
*/

let score = "33"
console.log(typeof (score));

let valInNumber = Number(score);
console.log(typeof valInNumber);

// console.log(valInNumber);  Not a Number

let isLoggedIn2 = 1
let booleanIsLoggedIn = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// **********Operations***********

let value = 3
let negValue = -value

console.log(negValue);

let str1 = "hello"
let str2 = "ayush"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);

let counter = 100
counter++
console.log(counter);
