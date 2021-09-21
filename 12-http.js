const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('Here is our short history')
    }

    res.write(`
    <h1>Ooops!!</h1>
    <p> We can't find </p>
    <a href="/"> back home </a>
    
    `)

})

server.listen(5000)