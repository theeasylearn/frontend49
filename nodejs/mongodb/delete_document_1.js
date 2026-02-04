var { dbPromise } = require('./db_connection');
var condition = { name: 'NODE JS' };
dbPromise.then((database) => {
    //delete documents
    
    database.collection('data').deleteOne(condition, (error, result) => {
        if (error != null)
            console.log(error.message);
        else
        {
            console.log(result);
            if(result.deletedCount>0)
                console.log('document has been deleted');
            else 
                console.log('document not found');
        }
    });
}).catch((error) => {
    console.log('error = ' + error);
});
