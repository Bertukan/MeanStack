var express = require("express");

var axios = require("axios");

var app = express();

app.get('/users', function (req, res) {
 const mypromise =axios.get('https://jsonplaceholder.typicode.com/users/').then(function(response){
   res.send(response)
  
 }).catch(err=>console.log(err))
  
   })
   app.listen(2323)

  console.log("server is runing")