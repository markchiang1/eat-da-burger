// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()
// middleware
app.use(express.static('public'))

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//way number 1
var controller =  require('./controller/burger_controller.js')

app.use(controller);

//way #2
//require('./controller/burger2.js')(app)

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e

  console.log('http://localhost:'+ PORT);
  
})
