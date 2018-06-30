const http = require ('http')
const { fork }= require ('child_process');
const server = http.createServer();
const fs = require('fs')
const url = require('url')

const queryString = require('querystring')

server.on('request',(req,res)=>{
 
    const myUrl =queryString.stringify(url.parse(req.url)).split("%2F")
    if ( myUrl.pop()== 'file.txt') {
        res.setHeader('Content-type', 'text/html');

        const childProcess = fork('prob1_child.js');
        childProcess.send('start')
        req.setEncoding("utf8");

        childProcess.on('message',(data)=>{
            res.end(data)
            console.log("anothe chunk is comming")
        })


     }

  
}).listen(8084)