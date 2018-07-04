
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/restuarnat";
var express=require('express');
var app=express();

var myresult
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("restuarnat");
    dbo.collection("rest").findOne({}, function(err, result) {
      if (err) throw err;
     
   myresult=result;
      db.close();
    });
   
  });

  app.get('/hello', function(req,res){
    //dycrypt
var mykey = crypto.createDecipher('aes256', 'asaadsaad');
var mystr = mykey.update(myresult,'hex', 'utf8')
 res.send(mystr);
//console.log(mystr);

}).listen(8282);