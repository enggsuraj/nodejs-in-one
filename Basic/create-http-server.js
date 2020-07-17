/************** HTTP SERVER **************/

const http= require('http');
const port = 8000;
const server = http.createServer((req,res)=>{
    res.end("Hi!! 😊");
})

server.listen(port,()=>{
    console.log(`Listening to ${port}`)
})
