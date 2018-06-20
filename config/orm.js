var connection = require('./connection.js')

// connection.connect();

var orm = {
    selectAll : function(tableName, cb){
        var query = 'Select * FROM ??;'
        connection.query(query, [tableName], function(err, result) {
        if (err) throw err;
        // console.log(result);
        cb(result)
      })
    },
    insertOne : function(tableName, name, cb){
        var query = `INSERT INTO ?? (burger_name, devoured);
        VALUES ('?', false)`
        connection.query(query, [tableName, name], function(err, result) {
        if (err) throw err;
        cb(result)
      })
    },
    updateOne : function(tableName, name, cb){
        var query = `UPDATE ??
        SET devoured = true
        WHERE burgerName = ?;`
        connection.query(query, [tableName, name], function(err, result) {
        if (err) throw err;
        console.log(result);
      })
    }
}
 
module.exports = orm;