var connection = require('./connection');

//create sql statement 
var sql = "select id,name,photo from category order by id desc";
//sql statement execute
connection.con.query(sql, function (error, table, fields) {
    if (error) {
        console.log(error);
    }
    else {
        var size = table.length;
        console.log(size);
        for (let index = 0; index < size; index++) {
            // console.log(table);
            let { id, name, photo } = table[index]; //object destructring 
            console.log(id, " ", name, " ", photo);
        }
    }
});
