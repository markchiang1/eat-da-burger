var orm = require('../config/orm.js')


var burger = {
    selectAll: function(cb){
        orm.selectAll('burgerlist', function(data){
            // console.log('burger.js')
            // console.log(data)
            cb(data)
        })
    },
    insertOne : function(tableName, name, cb){
        orm.insertOne(tableName, name, function(data){
            cb(data)
        })
    },
    

}

module.exports = burger
