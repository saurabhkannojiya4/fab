var express = require('express');
var app = express();


//Reusable controllers
var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {firstName:'saurabh',lastName:'kannojiya',age:23},
            {firstName:'Prashant',lastName:'sharma',age:26},
            {firstName:'shiv',lastName:'yadav',age:28},
            {firstName:'mayank',lastName:'sharma',age:25},
            {firstName:'ashu',lastName:'agrawal',age:23}
      ];
  res.send(customers);
};

// setting router to map requests  with controllers

app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})
