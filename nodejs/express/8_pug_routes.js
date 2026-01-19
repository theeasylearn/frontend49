var express = require('express')
var app = express()
app.set('view engine', 'pug')
app.set('views', 'views')
//define route
app.get("/one", function (request, response) {
    response.render('one'); //it will execute pug file and nodejs returns html page 
});

app.get("/two", function (request, response) {
    response.render('two'); //it will execute pug file and nodejs returns html page 
});

app.get("/three", function (request, response) {
    response.render('three'); //it will execute pug file and nodejs returns html page 
});

app.get("/variable", function (request, response) {
    response.render("variables", {
        name: "Ram kumar",
        gender: "Male",
        age: 30,
        weight: 65.25,
        mobile: "1234567890"
    });
});

app.listen(5000);
console.log('ready...');
