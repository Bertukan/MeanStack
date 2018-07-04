var express = require("express");
const {from} = require ('rxjs')

var axios = require("axios");
var app = express();
app.get('/users', function (req, res) {
 const mypromise =axios.get('https://jsonplaceholder.typicode.com/users/')
   

var myObservable = from(mypromise);
 myObservable.subscribe(e=>res.send(e.data))
})
app.listen(2323)
