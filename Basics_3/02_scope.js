/*let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner",a);
    
}

console.log(a);
// console.log(b);
console.log(c);*/

function one(){
    const username = "Ayush"
    function two(){
        const website = "Youtube"
        console.log(username);
    }

    //console.log(website);
    
    two();
}
one();

if(true){
    const username = "Ayush"
    if(username === "Ayush"){
        const website = "Yt"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

// ********** INTERESTING ********
console.log(addone(5));
function addone(num){
    return num + 1;
}

console.log(addTwo(5));
const addTwo = function(num){
    return num + 2;
}
