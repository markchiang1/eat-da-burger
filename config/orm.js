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
    insertOne: function(tableName, burgerName, cb){
      console.log("tableName", tableName.toString());
      console.log("burgerName", burgerName.toString());

         var query = `INSERT INTO ` +tableName.toString()+` (burger_name, devoured)
        VALUES (`+ burgerName.toString() + `, false);`
        connection.query(query, function(err, result) {
        if (err) throw err;
        cb(result)
      })
      
    },
    updateOne : function(tableName, name, cb){
        var query = `UPDATE`+ tableName+` 
        SET devoured = true
        WHERE burgerName =`+ name+`;`
        connection.query(query, [tableName, name], function(err, result) {
        if (err) throw err;
        console.log(result);
      })
    }
}
 
module.exports = orm;