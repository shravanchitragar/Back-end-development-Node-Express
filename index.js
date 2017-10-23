const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use('/dishes' , dishRouter);
app.use('/dishes' , dishRouter);

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.use((req,res,next) =>{
 
    res.statusCode = 200;
    res.setHeaders = ('Content-Type','text/plain');
    res.end('hi folks , how are you?');

});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});