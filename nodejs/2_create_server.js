//import http module
var http = require('http');
//global variable
var count = 0;
//create server 
var server = http.createServer(function (request, response) {
    count = count + 1;
    console.log(`I have received request no ${count}`);
});

//server start
const portno = 5000;
server.listen(portno);

//use url from browser : http://localhost:5000