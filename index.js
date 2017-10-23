const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.all('/dishes' ,(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('Info of the dishes are sent to you!!!');
});

app.post('/dishes',(req,res,next)=>{

    res.end('Name of the dish' + req.body.name + 'with details' + req.body.description + 'is sent to u !!!');
});

app.put('/dishes',(req,res,next)=>{
    
    res.statusCode = 403;    
    res.end('This is not supported');
    });


app.delete('/dishes',(req,res,next)=>{
    
        res.end('All dishes are deleted!!');

    });   

    app.get('/dishes/:dishID',(req,res,next)=>{
        res.end('Info of the dish' + req.params.dishID +'is sent to you!!');
    });
    
    app.post('/dishes/:dishID',(req,res,next)=>{
        res.statusCode = 403;
        res.end('Post is not supported');
    });
    
    app.put('/dishes/:dishID',(req,res,next)=>{
            res.write('Updating the dish :' + req.params.dishID );
            res.end('will update the new dish with name:' + req.body.name + 'with details' + req.body.description);
        });
    
    
    app.delete('/dishes/:dishID',(req,res,next)=>{
        
            res.end('Dish : ' + req.params.dishID + 'is deleted');
    
        });  

app.use((req,res,next) =>{
 
    res.statusCode = 200;
    res.setHeaders = ('Content-Type','text/plain');
    res.end('hi folks , how are you?');

});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});