// using changing the callback to promisify
const dns = require('dns')
const {promisify} = require('util')
const res = promisify(dns.resolve4);
 res('www.mum.edu').then((add)=>{console.log(add);}).catch(err=>console.log(err))





// or another way we can do it like this

// const util = require('util');
// const dnsy = require('dns');

// const stat = util.promisify(dnsy.resolve4);
// stat('www.mum.edu').then((address) => {
//     console.log('address: %j', address);
// }).catch((error) => {
//     console.log('Adress Not found');
// });