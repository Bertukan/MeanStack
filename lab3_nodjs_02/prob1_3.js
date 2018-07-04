
// using asycn await
const {promisify} = require('util')
const dns = require('dns')
const res = promisify(dns.resolve4);
async function main() {

    try{
       const data= await res('www.mum.edu')
        console.log(data);
    }
    catch(err){
        console.log('error:', err);
    }
}

main();
