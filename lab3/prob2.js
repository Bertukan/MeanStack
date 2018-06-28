const server = require('http')
const fs = require('fs')

// server.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'image/jpg'});
// var readStream = fs.createReadStream(__dirname+'/animal.jpg')
//  readStream.pipe(res)
// }).listen(8080);


// server.createServer(function(req,res){
//     fs.readFile('animal.jpg', function(err, data) {
//         res.writeHead(200,{'Content-Type':'image/jpg'});
//         res.write(data);
//         res.end();
//       });

// }).listen(8080);

server.createServer(function(req,res){
    fs.readFile('animal.jpg', function(err, data) {
       
        res.writeHead(200,{'Content-Type':'image/jpg'});
        res.write(data);
        res.end();
      });

}).listen(8080);