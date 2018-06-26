
var mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.creatConnection(process.env.JAWSDB_URL)
} else {
  connections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burger',
    port: 3308
  });
}

connection.connect();
module.exports = connections
