// If
let userLoggedIn = true

if(2 == "2"){
    console.log("executed");
}
if(2 === "2"){
    console.log("executed 2");
}
if(2 !== "2"){
    console.log("executed 3");
}
if(2 != "2"){
    console.log("executed 4");
}

const score = 200
if(score > 100){
    var power = "fly"   // var is global scope
    console.log(`user power : ${power}`);
}
console.log(`user power : ${power}`);

const balance = 1000

if(balance > 500)  console.log("Tested");


if(balance < 500){
    console.log("Less than 500"); 
}
else if(balance < 750){
    console.log("Less than 750"); 
}
else if(balance < 900){
    console.log("Less than 900"); 
}
else{
    console.log("Less than 1200"); 
}


const userLogge = true
const debitCard = true

if(userLogge && debitCard || 2==3){
    console.log("Allow to buy course");
}


const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3: 
        console.log("March");
        break;
    default:
        console.log("Default value match");
        break;
}