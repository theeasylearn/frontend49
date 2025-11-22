const c = require('../common.js');  // Correct relative path
class DBAdapter {
    constructor(database = null, server = null, portno = null, username = null) {
        this.database = database ?? c.database;
        this.server = server ?? c.server;
        this.portno = portno ?? c.portno;
        this.username = username ?? c.username;
        console.log('contructor called..');
    }

    //insert/update/delete
    runQuery(sql,data=null)
    {
        console.log(sql,data);
    }
    fetchData(sql,data=null)
    {
        console.log(sql,data);
    }
}
module.exports = DBAdapter;