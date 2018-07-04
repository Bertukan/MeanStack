const fs = require('fs')
var path = require('path')
 
process.on('message',(msg) => {
var readable  = fs.createReadStream(path.join(__dirname,'/file.txt'),{
    encoding: 'utf8', highWaterMark:16*1024})
 
    readable.on('data',function(chunk){
        process.send(chunk)
    })
 })