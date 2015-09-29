var express = require('express');
var app = express();

app.get('/op/:oper/:num1/:num2', function (req, res) {
    var responseObject = doMath( req.params.oper, Number(req.params.num1), Number(req.params.num2) );
    if(responseObject === "ERROR"){
        res.sendStatus(400);
    }else{
        res.send( responseObject );
    }
});

function doMath(operator, num1, num2){
    switch (operator) {
        case 'add':
            return {
              "operator": "add",
              "firstOperand": num1,
              "secondOperand": num2,
              "solution": num1+num2
            };
            
        case 'sub':
            return {
              "operator": "substract",
              "firstOperand": num1,
              "secondOperand": num2,
              "solution": num1-num2
            };
            
        case 'mult':
            return {
              "operator": "multiply",
              "firstOperand": num1,
              "secondOperand": num2,
              "solution": num1*num2
            };
            
        case 'div':
            return {
              "operator": "divide",
              "firstOperand": num1,
              "secondOperand": num2,
              "solution": num1/num2
            };
        
        default:
            return "ERROR";
    }
}


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
