var express = require('express')
var storage = require('./storage')
var bodyParser = require('body-parser');

var app = express();
//middleware
//define middleware (required to access input via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

const ROUTE = '/data';

// INSERT document
// curl -X POST http://localhost:5000/data -d "movie=bcd&duration=155&generation=horror&year=2025"
app.post(ROUTE, (req, res) => storage.insert(req, res));

// UPDATE document
// curl -X PUT http://localhost:5000/data -d "_id=67a123b4c5d6e7f890123456&movie=NewTitle&duration=180"
app.put(ROUTE, (req, res) => storage.update(req, res));

// DELETE document
// curl -X DELETE http://localhost:5000/data -d "id=67a123b4c5d6e7f890123456"
app.delete(ROUTE, (req, res) => storage.deleteDocument(req, res));

// FETCH all documents
// curl http://localhost:5000/data
app.get(ROUTE, (req, res) => storage.select(req, res));

app.listen(5000);
console.log('ready to accept request');