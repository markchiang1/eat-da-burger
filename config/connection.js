
var mysql = require('mysql');

var connections = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'burger',
  port: 3308
});

module.exports = connections
