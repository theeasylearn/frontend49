//import express
var express = require('express');

//create app object
var app = express();
//create routes for website 
//there are 4 main types of routes (get,post,put,delete)
/*
/ 
menu
gallery
recipe
testimonials
marriage
*/
//to create route 
app.get("/", function (request, response) {
    response.send("<html><head></head><body><h1>Home</h1></body</html>");
});

app.get("/menu",function(request,response){
     response.send("<html><head></head><body><h1>Menu</h1></body</html>");
});

app.get("/gallery",function(request,response){
     response.send("<html><head></head><body><h1>gallery</h1></body</html>");
});

app.get("/recipe",function(request,response){
     response.send("<html><head></head><body><h1>recipe</h1></body</html>");
});

app.get("/testimonials",function(request,response){
     response.send("<html><head></head><body><h1>testimonials</h1></body</html>");
});

app.get("/marriage",function(request,response){
    response.send("<html><head></head><body><h1>marriage</h1></body</html>");
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