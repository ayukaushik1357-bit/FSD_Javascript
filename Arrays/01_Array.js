const arr = [1,2,3,4,5]
const myHero = ["Shaktiman","Spiderman","Sydney"]

console.log(arr[0]);
console.log(myHero[0]);

// Array Methods

arr.push(6)
arr.push(7)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(2)
console.log(arr);

console.log(arr.includes(5));
console.log(arr.indexOf(9));

const newArr = arr.join()
console.log(newArr);
console.log(typeof newArr);

// SLice and Splice

console.log("A ", arr);

const myn1 = arr.slice(1,3);
console.log(myn1);
console.log("B ", arr);

const myn2 = arr.splice(1,3);  // Original Array manipulate
console.log("C ", arr);
console.log(myn2);
