var express = require('express');
var app = express();
function calculate(request, response, mode) {
    console.log(request.params);
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    console.log(num1, num2);
    if (num1 === undefined || num2 == undefined)
        response.send("2 inputs are required");
    else {
        var n1 = parseInt(num1);
        var n2 = parseInt(num2)
        if (isNaN(n1) || isNaN(n2)) {
            response.send("2 inputs must be numbers");
        }
        else {
            let result;
            let message;
            switch(mode)
            {
                case "add":
                    result = parseInt(n1) + parseInt(n2);
                    message = "addition";
                    break;
                    case "sub":
                        result = parseInt(n1) - parseInt(n2);
                        message = "subtraction";
                break;
            }
            response.send(`${message} = ${result}`);
        }

    }
}
app.get("/add{/:num1}{/:num2}", (req,res) => calculate(req,res,'add'));
app.get("/sub{/:num1}{/:num2}", (req,res) => calculate(req,res,'sub'));


app.use(function (request, response) {
    response.status(404).send('no route found');
});
app.listen(5000);
console.log('ready to accept request');