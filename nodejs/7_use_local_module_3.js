const c = require('./lib/common.js');
const e = require('./lib/mymail.js');
const site = require('./lib/common_2.js');
const {database} = require('./lib/dbAdapter.js');
console.log(c.server);
console.log(c.database);
console.log(c.portno);
console.log(c.username);
receiver = "ankit3385@gmail.com";
subject = "test subject email";
message = "test message ";
e.SendEmail(receiver, subject, message);

console.log(site.name);
console.log(site.address1);
console.log(site.address2);
console.log(site.city);
console.log(site.pincode);
//create object
var db = new database.DBAdapter();
console.log(db);