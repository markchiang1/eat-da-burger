var express = require('express')
var burger = require('../models/burger.js')

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        console.log('controller.js')
        console.log(data)
        res.render('index', {key: data});
    })
})

router.post("/:id", function(req, res) {
    var burgerName = req.params.id
    console.log('burger_controller', burgerName);

    burger.insertOne('burgerlist', burgerName, function(data){
        console.log(data);
        
    })
})

router.put("/:id", function(req, res) {
    // burger.selectAll(function(data){
    //     console.log('controller.js put')
    //     console.log(data)
    //     res.render('index', {key: data});
    // })
})

router.delete("/:id", function(req, res) {
    // burger.selectAll(function(data){
    //     console.log('controller.js delete')
    //     console.log(data)
    //     res.render('index', {key: data});
    // })
})

module.exports = router;
 