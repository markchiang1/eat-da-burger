var orm = require('../config/orm.js')


var burger = {
    selectAll: function(cb){
        orm.selectAll('burgerlist', function(data){
            // console.log('burger.js')
            // console.log(data)
            cb(data)
        })
    },
    insertOne : function(data, cb){
        orm.insertOne('burgerlist', data, function(res){
            cb(res)
        })
    },
    

}

module.exports = burger
