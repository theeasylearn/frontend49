var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    var endpoint = url.parse(request.url, true);
    var data = endpoint.query;
    var filename = data.filename;
    response.writeHead(200, { 'content-type': 'text/html' });
    fs.unlink(filename, function (error) {
    {
        if (error)
            response.write('error, occured....');
        else
            response.write('file has been deleted....');
    }
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request');
