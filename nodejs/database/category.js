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
app.get(CATEGORY_ROUTE + '/:start?', function (request, response) {
    let start = 0; //assume start is not provided when calling api
    if (request.params.start !== undefined) {
        start = parseInt(request.params.start);
    }
    let count = 20;
    //create sql statement
    let sql = `select id,name,photo,detail from category order by id desc limit ?,?`;
    let values = [start, count];
    connection.con.query(sql, values, function (error, table, fields) {
        if (error) {
            console.log(error);
        }
        else {
            response.json(table);
        }

    });
});

//insert new category
app.post(CATEGORY_ROUTE, function (request, response) {
    console.log(request.body);
    let { name, photo, detail } = request.body;
    if (name === undefined || photo === undefined || detail === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        var sql = "insert into category (name,photo,detail) values(?,?,?)";
        let values = [name, photo, detail];
        //run sql statement
        connection.con.query(sql, values, function (error, result) {
            if (error) // error!=null means there is some issue/error in executing sql 
            {
                response.json([{ 'error': 'oops, something went wrong, please after sometimes' }]);
                //log error into file
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category inserted' }]);
            }

        });
    }

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
