var { dbPromise } = require('./db_connection');
//new value 
var newObject = { $set: { title: 'Macbook air', amount: 149000, color: 'silver' } }
var condition = { amount: 125000 };
dbPromise.then((database) => {
    //update documents
    database.collection('data').updateOne(condition, newObject, (error, response) => {
        if (error != null)
            console.log(error.message);
        else
            console.log('document has been updated');
    });
}).catch((error) => {
    console.log('error = ' + error);
});
