for(let index = 0;index<10; index++){
    const element = index;
    if(element == 5){
        console.log("5 is best element");
    }
    console.log(element);   
}

for (let i = 0; i < 4; i++) {
    console.log(`Outer loop value ${i}`);
    for(let j = 0; j < 4; j++){
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

let arr = [1,2,3]
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}


// Break and Continue
for (let i = 0; i < 10; i++) {
    if(i == 3)
        continue;
    if(i == 5)
        break;

    console.log(`value of i is ${i}`);
}