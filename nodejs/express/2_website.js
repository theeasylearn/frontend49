//import express
var express = require('express');
var fs = require('fs');
//create app object
var app = express();
var ErrorText = "oops, something went wrong, please try after sometime";
//create routes for website 
app.get("/", function (request, response) {
    fs.readFile("../site/index.html", function (error, FileContent) {
        if (error)
            response.send(ErrorText);
        else
            response.send(FileContent.toString());
    });
});

app.get("/menu", function (request, response) {
    fs.readFile("../site/menu.html", function (error, FileContent) {
        if (error)
            response.send(ErrorText);
        else
            response.send(FileContent.toString());
    });
});

app.get("/gallery", function (request, response) {
    fs.readFile("../site/gallery.html", function (error, FileContent) {
        if (error)
            response.send(ErrorText);
        else
            response.send(FileContent.toString());
    });
});

app.get("/recipe", function (request, response) {
    fs.readFile("../site/recipe.html", function (error, FileContent) {
        if (error)
            response.send(ErrorText);
        else
            response.send(FileContent.toString());
    });
});

app.get("/testimonials", function (request, response) {
    fs.readFile("../site/testimonials.html", function (error, FileContent) {
        if (error)
            response.send(ErrorText);
        else
            response.send(FileContent.toString());
    });
});

app.get("/marriage", function (request, response) {
    fs.readFile("../site/marriage-hall.html", function (error, FileContent) {
        if (error)
            response.send(ErrorText);
        else
            response.send(FileContent.toString());
    });
});

//define 404 response for non existing route request using middleware
app.use((request, response) => {
    response.send("<html><head></head><body><h1>page not found</h1></body</html>");
});

//start server 
app.listen(5000, function (error) {
    if (!error)
        console.log('server has been started successfully...');
    else
        console.log('error in starting server');
});