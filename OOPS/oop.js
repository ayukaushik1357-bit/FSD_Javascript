const user = {
    userName: "Ayush",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log("Get user details from database")
        console.log(`USername: ${this.userName}`)
        console.log(this)
    }
}

//console.log(user.getUserDetails())
console.log(typeof(user));

function users(userName,loginCount,isLoggedIn){
    this.userName = userName
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`)
    }
    return this
}

const userOne = new users("Ayush",2,true)
const userTwo = new users("Hitesh",5,false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor())
