//import local module
var http = require('http');
var dt = require('./lib/datetime.js');
//global variable
var count = 0;
//create server 
var server = http.createServer(function (request, response) {
    let output = dt.getDate() + " " + dt.getTime();
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(output);
    response.end();
});
//server start
const portno = 5000;
server.listen(portno);
//use url from browser : http://localhost:5000