function insert(request, response) {
   var document = request.body;
   
}
function update(request, response) {
    console.log('update document');
}
function deleteDocument(request, response) {
    console.log('delete document');
}
function select(request, response) {
    console.log('select document');
}

module.exports.insert = insert;
module.exports.update = update;
module.exports.deleteDocument = deleteDocument;
module.exports.select = select;

