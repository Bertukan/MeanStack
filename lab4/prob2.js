var os = require('os')
 //const {from} = require ('rxjs')

function checkSystem(){
    return new Promise(function(resolve,reject){
        if(resolve){
         if(os.cpus().length>2 && os.totalmem>4*1e9) {
            console.log(os.cpus().length)
            
             resolve ("System is checked successfully")
            } 
         if(os.cpus().length<2){
             reject ("Processor is not supported")
          }
          if (os.totalmem()<4*1e9){
              console.log(os.totalmem())
             reject ("This app needs at least 4 GB of RAM")
         } 
     }})
}

 
checkSystem().then(e=>console.log(e)).catch(err=>console(err))

//2 Using Observable
// var myPromise  = checkSystem();
// var myObservable = from(myPromise);
// myObservable.subscribe(e=>console.log(e))

console.log("checking Your system . . .")