// category_v2.js
var connection = require('./connection');
var io = require('./file_io');
function select(request, response) {
    let start = 0; //assume start is not provided when calling api
    if (request.params.start !== undefined) {
        start = parseInt(request.params.start);
    }
    let count = 20;
    //create sql statement
    let sql = `select id,name,photo,detail from category where is_deleted=0 order by id desc limit ?,?`;
    let values = [start, count];
    connection.con.query(sql, values, function (error, table, fields) {
        if (error) {
            console.log(error);
            io.LogError('fetch category', error);
        }
        else {
            response.json(table);
        }
    });
}

function insert(request, response) {
    console.log(request.body);
    let { name, photo, detail } = request.body;
    if (name === undefined || photo === undefined || detail === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        var sql = "insert into category(name,photo,detail) values(?,?,?)";
        let values = [name, photo, detail];
        //run sql statement
        connection.con.query(sql, values, function (error, result) {
            if (error) {
                //log error into file
                response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
                io.LogError('insert category', error);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category inserted' }]);
            }

        });
    }
}

function update(request, response) {
    console.log(request.body);
    let { name, photo, detail, id } = request.body;
    if (name === undefined || photo === undefined || detail === undefined || id === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        var sql = "update category set name=?,photo=?,detail=? where id=?";
        let values = [name, photo, detail, id];
        //run sql statement
        connection.con.query(sql, values, function (error, result) {
            if (error) // error!=null means there is some issue/error in executing sql 
            {
                response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
                io.LogError('update category', error);
            }
            else {
                if (result.affectedRows == 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'category not found' }]);
                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category updated' }]);
                }
            }
        });
    }
}

function deleteCategory(request, response) {
    console.log(request.body);
    let id = request.body.id;
    if (id === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        var sql = "update category set is_deleted=? where id=?";
        let values = [1, id];
        //run sql statement
        connection.con.query(sql, values, function (error, result) {
            if (error) // error!=null means there is some issue/error in executing sql 
            {
                response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
                io.LogError('update category', error);
            }
            else {
                if (result.affectedRows == 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'category not found' }]);
                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category deleted' }]);
                }
            }
        });
    }
}

module.exports.select = select;
module.exports.insert = insert;
module.exports.update = update;
module.exports.delete = deleteCategory;