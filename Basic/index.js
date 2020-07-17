

const http = require('http');
const fs = require('fs')
const port = 8080;

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

const replaceTemplate=(temp,product)=>{
    let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName)
    output = output.replace(/{%PRODUCTNAME%}/g,product.image)
    output = output.replace(/{%FROM%}/g,product.from)
    output = output.replace(/{%NUTRIENTS%}/g,product.nutrients)
    output = output.replace(/{%QUANTITY%}/g,product.quantity)
    output = output.replace(/{%PRICE%}/g,product.price)
    output = output.replace(/{%DESCRIPTION%}/g,product.description)
    output = output.replace(/{%ID%}/g,product.id)

    if(!product.organic){
        output = output.replace(/{%NOT_ORGANIC%}/g,'not-grganic')
        return output;
    }

}

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    console.log(pathName);

    if(pathName === '/' || pathName === '/overview'){
        res.writeHead(200,{'Content-type':'text/html'});

        const cardshtml = dataObj.map(el=>replaceTemplate(tempCard,el)).join('');
        console.log(cardshtml)

        const output = tempOverview.replace( '{%PRODUCT_CARDS%}',cardshtml)

        res.end(output);
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


