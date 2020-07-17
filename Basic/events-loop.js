const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on("newSale", ()=>{
    console.log("This was a new sale!");
});

myEmitter.on("newSale",()=>{
    console.log("Customer : blogtheorem")
});

myEmitter.on("newSale",(stock)=>{
    console.log(`There are ${stock} stocks`)
});

myEmitter.emit("newSale",9);

/*
This was a new sale!  
Customer : blogtheorem
There are 9
*/

//USING CLASS

class Sales extends EventEmitter {
    constructor(){
        super();
    }
}

const myNewEmitter = new Sales();

myNewEmitter.on("newSale", ()=>{
    console.log("Another sale!");
});

myNewEmitter.on("newSale",()=>{
    console.log("Customer : suraj")
});

myNewEmitter.on("newSale",(stock)=>{
    console.log(`There are ${stock} stocks`)
});

myNewEmitter.emit("newSale",25);

/*
Another sale!
Customer : suraj
There are 25 stocks
*/

//3. CREATING SERVER AND LISTEN EVENTS 

const http = require("http");
const server = http.createServer();
server.on("request", (req,res)=>{
    console.log("Request received!!");
});

server.on("request", (req,res)=>{
    console.log("Another request👍");
});

server.on("close", ()=>{
    console.log("server closed!")
});

server.listen(8000,()=>{
    console.log("Listening...")
})

/*
Listening...
Request received!!
Another request�
*/