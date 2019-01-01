
//get the npm file share modual
var fs = require("fs");

//  capture command line arguments
var action = process.argv[2];
var value = process.argv[3];


//creating statments that match the value of the command line argument action / argv[2]
//If argument matches total call get acount total. each action will call its specific funtion.

if (action === "total") {
    total();

}
if  ( action === "deposit") {
    deposit();
}

if (action === "withdraw") {
   withdraw();
}

if (action === "gamble"){
    gamble();
}




