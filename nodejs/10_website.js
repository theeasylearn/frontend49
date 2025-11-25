var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    var endpoint = url.parse(request.url, true);
    var path = endpoint.pathname; //routes
    response.writeHead(200, { 'content-type': 'text/html' });
    var ErrorText = "oops, something went wrong, please try after sometime";
    var page = "404.html";
    if (path === "/" || path === "index.html") {
        page = "site/index.html";
    }
    else if (path === "/menu.html") {
        page = "site/index.html";
    }
    else if (path === "/gallery.html") {
        page = "site/gallery.html";
    }
    else if (path === "/recipe.html") {
        page = "site/recipe.html";
    }
    else if (path === "/testimonials.html") {
        page = "site/testimonials.html";
    }
    else if (path === "/marriage-hall.html") {
        page = "site/marriage-hall.html";
    }

    fs.readFile(page, function (error, FileContent) {
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
