
Array.prototype.even = function(){
    var arr2 = new Array();
         for(let i=0; i<this.length; i++){
            if(this[i]%2===0){
                arr2.push(this[i])
            }
        
    }
    console.log(arr2)
}

Array.prototype.odd = function(){
    var arr = new Array();
         for(let i=0; i<this.length; i++){
            if(this[i]%2!==0){
                arr.push(this[i])
            }
        
    }
    console.log(arr)
}

process.nextTick(()=>{    console.log("start")})
var arr = new Array(1,2,3,4,5,6,7,8)
setTimeout(()=>{arr.even()},1000)
setTimeout(()=>{arr.odd()},1000)
process.nextTick(()=>{    console.log("end")})
 