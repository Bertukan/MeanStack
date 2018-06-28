//  var dns = require('dns')

//  dns.resolve4('www.mum.edu', function (err, addresses) {
// console.log(addresses)
// })


const {promisfy} = require('util')
 const dns = require('dns')
 var res = promisfy(dns.resolve4);
 res('www.mum.edu').then((add)=>{cosole.log(add)}).catch(err=>console.log(err))

