const { MongoClient } = require('mongodb');
var url = "mongodb://127.0.0.1:27017";
var dbName = "frontend49"; //database must be exists
var client = new MongoClient(url);
var dbPromise = client.connect().then(() => {
    console.log('database connected...');
    return client.db(dbName);
}).catch((error) => {
    console.log('Error ' + error);
    return error;
});
module.exports = {dbPromise};