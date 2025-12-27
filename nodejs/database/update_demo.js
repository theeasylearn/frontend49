const connection = require('./connection');
//create sql statement
var sql = "update category set name='ABC',photo='abc.jpg',detail='it is best product' where id=3";
//run sql statement
connection.con.query(sql, function (error, result) {
    if (error) // error!=null means there is some issue/error in executing sql 
        console.log(error)
    else {
        console.log('No of rows inserted ', result.affectedRows);
        console.log('ID of Inserted row ', result.insertId);
        console.log(result);
    }
});