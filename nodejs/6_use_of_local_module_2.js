//import local module
var http = require('http');
var security = require('./lib/security.js');
function handleRequest(request,response)
{
    var password = security.generateRandomgPassword();
    security.getHashPassword(password).then(function(hashedPassword){
        response.writeHead(200,{'content-type':'text/html'});
        response.write(password + " " + hashedPassword);
        response.end();
    });
    
    
}
var server = http.createServer((request,response) => handleRequest(request,response));
//server start
const portno = 5000;
server.listen(portno);
//use url from browser : http://localhost:5000