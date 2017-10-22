const exp = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = exp();

app.use((req,res,next) =>{
 
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeaders = ('Content-Type','text/plain');
    res.end('hi folks , how are you?');

});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});