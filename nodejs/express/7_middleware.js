var express = require('express');
var fs = require('fs');
var app = express();
const FILENAME = "access.log";
const list = ["'", "\"", ";", "--", "#", "/*", "*/", "=", "<", ">", "(", ")", "{", "}", "[", "]"];
//define middleware
app.use(function (request, response, next) {
    // console.log("I am 1st middleware");
    let now = new Date();
    let datetime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    let output = `\nurl = ${request.url} method = ${request.method} IP Address = ${request.ip} DateTime = ${datetime}`;
    fs.appendFile(FILENAME, output, function (error) {
        if (error) console.log('unable to request request information into file');
    });
    next();
});
app.use(function (request, response, next) {
    //console.log("I am 2nd middleware");
    let now = new Date();
    let hours = now.getHours(); //return current hours 
    if (hours < 10 || hours > 20) response.send('can not accept your request before 10am after 06pm');
    else next();
});
app.use(function (request, response, next) {
    
});
app.get("/aboutus", function (request, response) {
    response.send("About us page");
});

app.get("/contactus", function (request, response) {
    response.send("contact us page");
});

app.get("/products", function (request, response) {
    response.send("products page");
});

app.listen(5000);
console.log("ready to accept request.....");
