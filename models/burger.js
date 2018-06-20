var orm = require('../config/orm.js')


var burger = {
    selectAll: function(cb){
        orm.selectAll('burgerlist', function(data){
            // console.log('burger.js')
            // console.log(data)
            cb(data)
        })
    },
    insertOne : function(cb){
        orm.insertOne('burgerlist', function(data){
            cb(data)
        })
    },
    

}

module.exports = burger
