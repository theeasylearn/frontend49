var http = require('http');
var url = require('url');
var fs = require('fs');
//http://localhost:5000?old_filename=apple.txt&new_filename=banana.txt
var server = http.createServer(function (request, response) {
    var endpoint = url.parse(request.url, true);
    var data = endpoint.query; // {old_filename:apple.txt,new_filename:banana.txt}
    //object destructring 
    var { old_filename, new_filename } = data;
    response.writeHead(200, { 'content-type': 'text/html' });
    fs.rename(old_filename, new_filename, function (error) {
        if (error) {
            response.write('file could not renamed');
            console.log(error);
        }
        else 
        {
            response.write('file has been renamed successfully');
        }
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request');
