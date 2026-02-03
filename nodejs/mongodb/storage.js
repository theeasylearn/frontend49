var { dbPromise } = require('./db_connection');
function insert(request, response) {
    var document = request.body;
    //document insertion code
    dbPromise.then((database) => {
        database.collection('company').insertOne(document);
        response.json([{ 'error': 'no' }, { 'message': 'document inserted successfully' }])
    }).catch((error) => {
        console.log('error = ' + error);
        response.json([{ 'error': 'oops something went wrong,please try after sometime' }])
    });
}
function update(request, response) {
    console.log('update document');
}
function deleteDocument(request, response) {
    console.log('delete document');
}
function select(request, response) {
    dbPromise.then((database) => {
        //fetch all documents 
        database.collection('data').find({}).toArray((error, documents) => {
            if (error)
                console.log(error);
            else
                console.log(documents);
        })
    }).catch((error) => {
        console.log('error = ' + error);
    });

}

module.exports.insert = insert;
module.exports.update = update;
module.exports.deleteDocument = deleteDocument;
module.exports.select = select;

