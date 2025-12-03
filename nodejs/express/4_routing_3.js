var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//define middleware (required to access input via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

//create constant that has route name 
const ROUTE_NAME = "/contact";
//create list 
var customers = []; //list 
var customerId = 1;
//create get route 
//http://localhost:5000/contact
app.get(ROUTE_NAME, function (request, response) {
    response.json(customers);
});

//create post route
//http://localhost:5000/contact
app.post(ROUTE_NAME, function (request, response) {
    //create 4 variables
    // let name = request.body.name;
    // let email = request.body.email;
    // let mobile = request.body.mobile;
    // let message = request.body.message;
    // OR 
    let { name, email, mobile, message } = request.body;
    let output = null;
    if (name === undefined || email === undefined || mobile === undefined || message === undefined) {
        output = [{ 'error': 'input missing' }];
    }
    else {
        //push 
        let newCustomer = {
            id: customerId++,
            name: name,
            email: email,
            mobile: mobile,
            message: message
        };
        customers.push(newCustomer);
        // let output = `name = ${name} email = ${email} mobile = ${mobile} message = ${message}`;
        output = [{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact inserted' }];
    }

    response.json(output);
});

//create put  route to update contact 
//http://localhost:5000/contact
app.put(ROUTE_NAME, function (request, response) {
    let { id, name, email, mobile, message } = request.body;

    let output = null;
    if (id === undefined || name === undefined || email === undefined || mobile === undefined || message === undefined) {
        output = [{ 'error': 'input missing' }];
    }
    else {
        console.log(id, name, email, mobile);
        let temp = customers.filter(function (item) {
            if (item.id === parseInt(id))
                return item;
        });
        if (temp.length === 0) {
            output = [{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'contact not found' }];
        }
        else {
            output = [{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact found' }];
        }
        response.json(output);
    }
});

//create delete route
//http://localhost:5000/contact
app.delete(ROUTE_NAME, function (request, response) {
    response.send("delete request received for contact route");
});


app.listen(5000);
console.log('ready to accept request');