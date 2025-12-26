const mysql = require('mysql');
const common = require('./common')
con = mysql.createConnection({
    host: common.server,
    user: common.username,
    password: common.password,
    port: common.portno,
    database: common.database
});
con.connect(function(error){
    if(error)
        console.log(error);
    else 
        console.log('connection created...')
});
module.exports.con = con 