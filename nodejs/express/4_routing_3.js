var express = require('express');
var app = express();

//create constant that has route name 
const ROUTE_NAME = "/contact";

//create get route 
//http://localhost:5000/contact
app.get(ROUTE_NAME,function(request,response){
    response.send("get request received for contact route");
});

//create post route
//http://localhost:5000/contact
app.post(ROUTE_NAME,function(request,response){
    response.send("post request received for contact route");
});

//create put  route
//http://localhost:5000/contact
app.put(ROUTE_NAME,function(request,response){
    response.send("put request received for contact route");
});

//create delete route
//http://localhost:5000/contact
app.delete(ROUTE_NAME,function(request,response){
    response.send("delete request received for contact route");
});


app.listen(5000);
console.log('ready to accept request');