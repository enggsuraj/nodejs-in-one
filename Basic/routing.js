
//ROUTING & SIMPLE API
/*

/product
/overview
/api

*/

/*

const http = require('http');
const fs = require('fs')
const port = 8080;

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    console.log(pathName);

    if(pathName === '/' || pathName === '/overview'){
        res.end('This is overview');
    }else if(pathName === '/product'){
        res.end('This is product');
    }else if(pathName ==='/api'){

        // . represent current directory, here it is nodepractice
        // but if we start script from desktop then . mean desktop
        // therefore we use __dirname
        // fs.readFile('./dev-data/data.json') 

        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8',(err,data)=>{
            const productData = JSON.parse(data);
            console.log(productData);
            res.writeHead(200,{'Content-type':'application/json',});
            res.end(data);
        });

    }else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(port,()=>{
    console.log(`Server Listening at ${port}`);
})

*/

const http = require('http');
const fs = require('fs')
const port = 8080;

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    console.log(pathName);

    if(pathName === '/' || pathName === '/overview'){
        res.end('This is overview');
    }else if(pathName === '/product'){
        res.end('This is product');
    }else if(pathName ==='/api'){
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(data);
    }else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(port,()=>{
    console.log(`Server Listening at ${port}`);
})
