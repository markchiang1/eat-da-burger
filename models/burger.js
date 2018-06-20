var orm = require('../config/orm.js')


var burger = {
    selectAll: function(cb){
        orm.selectAll('burgerlist', function(data){
            // console.log('burger.js')
            // console.log(data)
            cb(data)
        })
    },
    insertOne : function(name, cb){
        orm.insertOne('burgerlist', name, function(data){
            cb(data)
        })
    },
    

}

module.exports = burger
