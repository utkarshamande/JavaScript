const accountId = 1234567
let accountEmail ="utkarsha@google.com"
var accountPassword = "1234"
accountCity = "Pune"
// accountId = 1233898238 // not allowed this if using const
let accountState;

accountEmail ="acbd@gmail.com"
accountPassword = "11334"
accountCity = "Mumbai"
/* 
prefer not to use var beacuse of issue in block and function scope
*/


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
