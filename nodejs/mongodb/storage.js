const ObjectId = require('mongodb').ObjectId;
var { dbPromise } = require('./db_connection');
//create constant 
var error = [{ 'error': 'oops something went wrong,please try after sometime' }];
var input_error = [{ 'error': 'input is missing' }];
function insert(request, response) {
    var document = request.body;
    //document insertion code
    dbPromise.then((database) => {
        database.collection('company').insertOne(document);
        response.json([{ 'error': 'no' }, { 'message': 'document inserted successfully' }])
    }).catch((error) => {
        console.log('error = ' + error);
        response.json(error)
    });
}
function update(request, response) {
    var _id = request.body._id;
    if (_id === undefined) {
        response.json(input_error);
    }
    else {
        var condition = { _id: ObjectId(_id) }
        var newObject = request.body;
        dbPromise.then((database) => {
            //update documents
            database.collection('company').updateOne(condition, { $set: newObject }, (error, res) => {
                if (error == null)
                    response.json([{ 'error': 'no' }, { 'message': 'document updated successfully' }]);
                else
                    response.json(error);
            });
        }).catch((error) => {
            console.log('error = ' + error);
        });
    }
}
function deleteDocument(request, response) {
    var id = request.body.id;
    if (id === undefined) {
        response.json(input_error);
    }
    else {
        var condition = { _id: ObjectId(id) }
        dbPromise.then((database) => {
            database.collection('company').deleteOne(condition, (error, result) => {
                if (error != null)
                    console.log(error.message);
                else {
                    console.log(result);
                    if (result.deletedCount > 0)
                        response.json([{ 'error': 'no' }, { 'message': 'document deleted successfully' }]);
                    else
                        response.json(error);
                }
            });
        }).catch((error) => {
            console.log(error);
        });
        // console.log('delete document');
    }

}

function select(request, response) {
    // console.log('1');
    dbPromise.then((database) => {
        //fetch all documents 
        database.collection('company').find({}).toArray((error, documents) => {
            // console.log('2');
            if (!error) {
                // console.log('3');
                response.json(documents);
            }
            else {
                // console.log(error);
                response.json(error);
            }
        })
    }).catch((error) => {
        console.log('error = ' + error);
    });

}

module.exports.insert = insert;
module.exports.update = update;
module.exports.deleteDocument = deleteDocument;
module.exports.select = select;

