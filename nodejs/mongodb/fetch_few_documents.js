var { dbPromise } = require('./db_connection');
var condition = { price : {$gt:10}}
dbPromise.then((database) => {
    //fetch all documents 
    database.collection('data').find(condition).toArray((error, documents) => {
        if (error)
            console.log(error);
        else
            console.log(documents);
    })
}).catch((error) => {
    console.log('error = ' + error);
});
