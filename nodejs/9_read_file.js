var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    var endpoint = url.parse(request.url, true);
    var path = endpoint.pathname; //routes
    response.writeHead(200, { 'content-type': 'text/html' });
    var ErrorText = "oops, something went wrong, please try after sometime";
    fs.readFile('site/demo.html', function (error, FileContent) {
        if (error) {
            response.write(ErrorText);
        }
        else {
            response.write(FileContent);
        }
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request');
