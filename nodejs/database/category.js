//create api to perform CRUD Operation on category table
var express = require('express');
var connection = require('./connection');
var bodyParser = require('body-parser');
var app = express();
//define middleware (required to access input via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
//define routes 
const CATEGORY_ROUTE = "/category";

//fetch all categories
app.get(CATEGORY_ROUTE, function (request, response) {
    let start = 0;
    let count = 20;
    //create sql statement
    let sql = `select id,name,photo,detail from category order by id desc limit ${start},${count}`;
    connection.con.query(sql, function (error, table, fields) {
        response.json(table);
    });
});

//insert new category
app.post(CATEGORY_ROUTE, function (request, response) {
    console.log(request.body);
});

//update existing category
app.put(CATEGORY_ROUTE, function (request, response) {
    console.log(request.body);
});

//delete existing category 
app.delete(CATEGORY_ROUTE, function (request, response) {
    console.log(request.body);
});

const PORTNO = 5000;
app.listen(PORTNO);
console.log('ready to accept request');
