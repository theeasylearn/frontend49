var { dbPromise } = require('./db_connection');
//new value 
var newObject = { $set: { name: 'Express JS', price: 299, author: 'A M Patel' } }
var condition = { name: 'nodejs' };
dbPromise.then((database) => {
    //update documents
    database.collection('data').updateMany(condition, newObject, (error, response) => {
        if (error != null)
            console.log(error.message);
        else
            console.log('document has been updated');
    });
}).catch((error) => {
    console.log('error = ' + error);
});
