let index = 0;
while(index <= 10){
    console.log(`Index with value ${index}`);
    index = index+2;
}

// For of loop
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

const greeting = "Hello World"
for(const greet of greeting){
    console.log(greet);
}


const map = new Map();
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('FR', "France")

console.log(map);

for(const [key,values] of map){
    console.log(key + ':-' + values);
}

const myObject = {
    'game1': "Spiderman",
    'game2': "Superman"
}
/*for(const [key,values] of myObject){  // Not iteratable
    console.log(key + ':-' + values);
}*/

const obj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in obj){
    console.log(`${key} shortcut is for ${obj[key]}`);
}

const program = ["js","cpp","rb","swift"]
for(const key in program){
    console.log(program[key]);
}