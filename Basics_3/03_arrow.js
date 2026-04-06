const user = {
    username: "Ayush",
    price: 77,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}

/*user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()*/
console.log(this);

/*function chai(){
    // let usern = "Ayu"
    console.log(this);   
}
chai()*/


/*const chai = function(){
    let usern = "Ayu"
    console.log(this.usern); 
}
chai();*/


/*const chai = () => {
    let usern = "Ayu"
    console.log(this); 
}
chai();*/

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));

const addT = (num1, num2) => (num1 + num2)
console.log(addT(3,5));

const obj = (num1, num2) => ({username:"Ayush"})
console.log(obj(3,4)); 
