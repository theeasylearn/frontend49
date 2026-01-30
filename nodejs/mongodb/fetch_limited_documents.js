var { dbPromise } = require('./db_connection');
dbPromise.then((database) => {
    //fetch all documents 
    database.collection('data').find({}).limit(10).toArray((error, documents) => {
        if (error)
            console.log(error);
        else
            console.log(documents);
    })
}).catch((error) => {
    console.log('error = ' + error);
});
