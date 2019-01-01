
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



//buildgin out the four above functions total deposit withdraw and gamble

function total () {
fs.readFile("account.txt", "utf8", function (err, data){
    if (err){
       return console.log(err)
    }

    data = data.split(", ");
    var result = 0;

    for (var i = 0; i < data.length; i++) {
        if (parseFloat(data[i])) {

        result += parseFloat(data[i]);
             }
         }

      console.log("account total is " + result.toFixed(2));
        });
};



//building the deposit function that writes the comand line argument to the account.txt file
function deposit (){
fs.appendFile("account.txt", ", +$" + value, function(err) {
    if (err) {
        return console.log(err);
    }
});
 console.log ("acocunt deposit", " +$" + value + "." );
}


//building the withdraw function that writes to the  comand line argument and to the account.txt file
function withdraw() {
fs.appendFile("account.txt", ", -$" + value, function(err) {
   if (err){
       return console.log(err);
   }
});
console.log ("account.txt", " -$" + value + ".");

}

