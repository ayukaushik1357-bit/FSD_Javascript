function sayName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayName();

/*function addTwoNumber(num1,num2){
    console.log(num1+num2);
}

addTwoNumber(3,4);
addTwoNumber(3,"4");

const result = addTwoNumber(2,1)
console.log("Result: ",result);*/

function addTwoNumber(num1,num2){
    // let result = num1 + num2;
    // return result;
    return num1+num2;
}
const result = addTwoNumber(2,1)
console.log("Result: ",result);
console.log(addTwoNumber(3,8));

function userLoggedIn(username){
    if(!username){
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`
}
console.log(userLoggedIn("ayu123"));


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(10,20,30,40));

function calculateCartPrice1(val1,val2,...num2){
    return num2
}
console.log(calculateCartPrice1(10,20,30,40));


const object = {
    name: "Ayush",
    price: 500
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);   
}

//handleObject(object)

handleObject({
    name: "kaushik",
    price: 5000
})

const arr = [100,200,300,400]
function secondValue(getArray){
    return getArray[1]
}
console.log(secondValue(arr));
