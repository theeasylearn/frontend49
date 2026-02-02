var express = require('express')
var storage = require('./storage')
var bodyParser = require('body-parser');

var app = express();
//middleware
//define middleware (required to access input via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

const ROUTE = '/data';
//insert document
//localhost:5000/data
//method post 
app.post(ROUTE,(req,res) => storage.insert(req,res));

//update document
//localhost:5000/data
//method post 
app.put(ROUTE,(req,res) => storage.update(req,res));

//delete document
//localhost:5000/data
//method post 
app.delete(ROUTE,(req,res) => storage.deleteDocument(req,res));

//fetch document
//localhost:5000/data
//method post 
app.get(ROUTE,(req,res) => storage.select(req,res));

app.listen(5000);
console.log('ready to accept request');

