var { dbPromise } = require('./db_connection');
var condition = { name: 'Express JS' };
dbPromise.then((database) => {
    //delete documents
    database.collection('data').deleteMany(condition, (error, result) => {
        if (error != null)
            console.log(error.message);
        else
        {
            console.log(result);
            if(result.deletedCount>0)
                console.log('documents has been deleted count = ',result.deletedCount);
            else 
                console.log('document not found');
        }
    });
}).catch((error) => {
    console.log('error = ' + error);
});
