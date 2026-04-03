//Singleton
//object.create

// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ayush",
    "full name": "Ayush kaushik",
    [mySym]: "mykey1",
    age: 21,
    location: "Delhi",
    email: "ayu@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday","Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "chatgpt@com"
Object.freeze(jsUser);
jsUser.email = "microsoft@com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello js ${this.name}`);
}

console.log(jsUser.greeting2());
