var express = require('express');
var app = express();
app.get("/add/:num1/:num2", function (request, response) {
    console.log(request.params);
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    console.log(num1,num2);
    let result = parseInt(num1) + parseInt(num2);
    response.send("addition = " + result);
});

app.get("/sub/:num1/:num2", function (request, response) {
    console.log(request.params);
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    console.log(num1,num2);
    let result = parseInt(num1) - parseInt(num2);
    response.send("subtraction = " + result);
});

app.get("/mul/:num1/:num2", function (request, response) {
    console.log(request.params);
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    console.log(num1,num2);
    let result = parseInt(num1) * parseInt(num2);
    response.send("multiplication = " + result);
});

app.get("/div/:num1/:num2", function (request, response) {
    console.log(request.params);
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    console.log(num1,num2);
    let result = parseInt(num1) / parseInt(num2);
    response.send("division = " + result);
});
app.use(function (request, response) {
    response.status(404).send('no route found');
});
app.listen(5000);
console.log('ready to accept request');