
var mysql = require('mysql');
var connections;
if (process.env.JAWSDB_URL) {
  connections = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burger',
    port: 3308
  });
}

connections.connect();
module.exports = connections
