var {dbPromise} = require('./db_connection');
dbPromise.then((database) => {
    //create object 
    var product = {title :"IPhone 17 pro max",amount:125000};
    database.collection('data').insertOne(product);
    console.log('document added');
}).catch((error) => {
    console.log('error = ' + error);
});
