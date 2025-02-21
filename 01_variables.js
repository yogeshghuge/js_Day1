const account_id=1445233
let account_email="manoj0522@gmail.com"
var account_password="12345" // not use thses var type 
account_city="Pune" // not use like these
let account_state; // by default undefined 

// account_id=2 //not change
account_email="hc@gmail.com"
account_password="45678"
account_city="Warje"


console.log(account_id)

/*
prefer not to use var 
because of issue in block scope and functional scope
 
*/

console.table([account_id, account_email,account_password, account_city, account_state])