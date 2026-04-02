const accountId = 144553;
let accountEmail = "ayus@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// In const we cannot change value
//accountId = 2

accountEmail = "ayukaushik1357@gmail.com"
accountPassword = "2455"
accountCity = "Goa"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountEmail,accountId,accountPassword,accountCity]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
