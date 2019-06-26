var express = require('express');
var app = express();

//Reusable controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {id:1, title:"mobiles",description:"redmi note 6 pro",quantity:500, unitprice:14000},
    {id:2, title:"Electronic",description:"AC",quantity:1500, unitprice:15000},
    {id:3, title:"Home Appliences",description:"TV",quantity:5000, unitprice:25000},
  ];
  res.send(products);
};

// setting router to map requests  with controllers
app.get ('/products',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})
