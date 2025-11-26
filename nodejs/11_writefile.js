var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    var endpoint = url.parse(request.url, true);
    var path = endpoint.pathname; //routes
    var data = endpoint.query;
    var name = data.name;
    var email = data.email;
    var mobile = data.mobile;
    var subject = data.subject;
    var message = data.message;
    var filename = "customers.txt";
    console.log(name, email, mobile, subject, message);
    var content = `Name = ${name}\nEmail = ${email} \nMobile = ${mobile} \n Subject=${subject} \n message = ${message}\n`;
    response.writeHead(200, { 'content-type': 'text/html' });
    fs.writeFile(filename, content, function (error) {
        {
            if (error)
                response.write('error, occured....');
            else
                response.write('Thank you for contacting us, we will call you soon');
        }
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request');
