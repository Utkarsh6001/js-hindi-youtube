const accountId  = 144553
let accountEmail = "utkarsh6001@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"

accountEmail = "hc@hc.com"
accountPassword = "333432432432"
accountCity = "benguluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and Function scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity]);