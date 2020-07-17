//templace-basic.html has placeholder {%HEAD%}

const fs = require('fs')
const http = require('http')
const url = require('url')

const basichtml = fs.readFileSync(`${__dirname}/templates/template-basic.html`,'utf-8')

const replaceTemplate =(coronahtml)=>{
    let output = coronahtml.replace(/{%HEAD%}/,'NODEJS PLACEHOLDER')
    return output
}

const server = http.createServer((req,res)=>{

    const pathName = req.url;
    console.log(pathName)

    if(pathName === '/'){
        res.writeHead(200,'text/html')
        const out = replaceTemplate(basichtml);
        res.end(out)

    }else{
        res.end('404 Error!!')
    }
})

server.listen(8500,()=>{
    console.log('Listeneing at 8500')
})

