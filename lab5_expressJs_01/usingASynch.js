
var express = require("express");
var axios = require("axios");
var app = express();

app.set('x-powered-by',false)

app.get('/users', function (req, res) {
    async function main(){
       const data=  axios.get('https://jsonplaceholder.typicode.com/users/')
        try{
            
            const myresp= await data
           res.send(myresp.data)
        }

        catch(err){
            console.log(err);
        }
    }

    main();
 
   

}) 

app.listen(2323)
