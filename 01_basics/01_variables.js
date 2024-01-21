const accountId = 14433
let accountEmail = "waseem@example.com"
var accountPassword = "1234"
accountCity = "lahore" // not use like this variable not recomended it

let accountState;


/*
Prefer not to use var 
because of issue in block scope and funcitonal scope
*/

// accountId = 2  // not allowed to reasign to const variable

accountEmail="new@gmail.com"
accountPassword = "346456"
accountCity = "islamabad"



console.table([accountId, accountEmail,accountPassword,accountCity,accountState])