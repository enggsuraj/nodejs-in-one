const http= require('http');
const port = 8000;
const server = http.createServer((req,res)=>{
    res.end("Hi!! 😊");
})

//LISTENING SERVER
server.listen(port,()=>{
    console.log(`Listening to ${port}`)
})
