const express = require('express')
const url = require('url')

const app = express();

app.get('/first',(req,res)=>{
    console.log(req.url);
    console.log('First')
    res
    .status(200)
    .json({"message":"hello",id:25})
    .end('Got the data!!')
})

app.post('/',(req,res)=>{
    res.send('Post method requested: Test in postman')
})

app.listen(8000,(req,res)=>{
    console.log('Server started!!🧨')
})