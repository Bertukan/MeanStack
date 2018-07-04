// to be updated

const eventEmmiter =require("events");

class voilin extends eventEmmiter{
    constructor(){
        super();
        let self = this;
        setInterval(function(){self.emit('note')}, 1000);
    }
}
const myisntance= new voilin();
myisntance.on('note', function(){console.log("music playing")});

