var express = require('express');
var app = express();

app.get("/add{/:num1}{/:num2}", function (request, response) {
    console.log(request.params);
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    console.log(num1, num2);
    if (num1 === undefined || num2 == undefined)
        response.send("2 inputs are required");
    else {
        let n1 = parseInt(num1);
        let n2 = parseInt(num2)
        if (isNaN(n1) || isNaN(n2)) {
            response.send("2 inputs must be numbers");
        }
        else {
            let result = parseInt(n1) + parseInt(n2);
            response.send(`addition = ${result}`);
        }

    }
});
app.get("/sub{/:num1}{/:num2}", function (request, response) {
    console.log(request.params);
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    console.log(num1, num2);
    if (num1 === undefined || num2 == undefined)
        response.send("2 inputs are required");
    else {
        let n1 = parseInt(num1);
        let n2 = parseInt(num2)
        if (isNaN(n1) || isNaN(n2)) {
            response.send("2 inputs must be numbers");
        }
        else {
            let result = parseInt(n1) - parseInt(n2);
            response.send(`subtraction = ${result}`);
        }

    }
});

app.use(function (request, response) {
    response.status(404).send('no route found');
});
app.listen(5000);
console.log('ready to accept request');