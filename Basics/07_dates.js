let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let newDate = new Date(2023, 25, 2)
console.log(newDate.toDateString());

let newCreateDate = new Date("08-01-2005")
//console.log(newCreateDate.toLocaleString());

// Time -> for quizes polls winners etc in projects

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(newCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate2 = new Date()
console.log(newDate2.getMonth() + 1);
console.log(newDate2.getDay());

console.log(`${newDate2.getTime()} and the date is ${newDate.getDate()}`);