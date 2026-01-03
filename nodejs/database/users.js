var express = require('express');
var connection = require('./connection');
var bodyParser = require('body-parser');
var security = require('./security.js');
var app = express();
//define middleware (required to access input via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
//define routes 
const USERS_ROUTE = "/users";
//post route 
app.post(USERS_ROUTE, function (request, response) {
    var { email, mobile, password } = request.body;
    if (email === undefined || mobile === undefined || password === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        let sql = "INSERT INTO `users`(`email`, `password`, `mobile`) VALUES (?,?,?)";
        security.getHashPassword(password).then(function (hashedPassword) {
            let values = [email, hashedPassword, mobile];
            connection.con.query(sql, values, function (error, result) {
                if (error) // error!=null means there is some issue/error in executing sql 
                {
                    console.log(error);
                    if (error.errno === 1062) //duplicate entry in unique field
                    {
                        response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'email/mobile is already registered with us' }]);
                    }
                    else {
                        response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
                    }
                    //log error into file
                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'registration successfull' }]);
                }
            });
        });

    }
});
const PORTNO = 5000;
app.listen(PORTNO);
console.log('ready to accept request');

