var express = require('express');
var bodyParser = require('body-parser');
var users = require('./users_v2.js');
var app = express();
//define middleware (required to access input via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
//define routes 
const USERS_ROUTE = "/users";

app.post(USERS_ROUTE + "/register",(req,res) => users.register(req,res));
app.post(USERS_ROUTE + "/login",(req,res) => users.login(req,res));
app.post(USERS_ROUTE + "/change_password", (req,res) => users.change_password(req,res));
app.post(USERS_ROUTE + "/recover_password",(req,res) => users.forgot_password(req,res));

const PORTNO = 5000;
app.listen(PORTNO);
console.log('ready to accept request');
