/*const promiseOne = new Promise(function(resolve,reject){
    // DO async task
    // DB call, cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed')
        resolve();
    },1000)
})
// Resolve has direct relation with then()
promiseOne.then(function(){
    console.log('Promise consumed')
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is completed')
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved')
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Ayush",email:"chai@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Ayush",email:"chai@gmail.com"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{console.log("The promise is either resolve or reject")})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Ayush",email:"ayu@gmail.com"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
async function consume() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consume()


async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log('E:',error)
    }
}
getAllUsers()*/