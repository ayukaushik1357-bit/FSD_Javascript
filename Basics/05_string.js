// Revise heap and stack before any interview

let str = "Ayush"
let count = 50

console.log(str + count + " value");

// STRING INTERPOLATION

console.log(`Hello my name is ${str} and my repo count is ${count}`);

const name = new String("Ayush Kaushik");

console.log(name);
console.log(name[0]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(5));
console.log(name.indexOf('k'));

const newName = name.substring(0,7)
console.log(newName);

const newName2 = name.slice(1,6)
console.log(newName2);

const newString = "   kaushik    "
console.log(newString);
console.log(newString.trim());

const url = "https://ayush.com/ayush%20kaushik"
console.log(url.replace('%20', '-'));
console.log(url.includes('ayush'));

console.log(name.split('-'));
