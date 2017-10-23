const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Info of the dishes are sent to you!!!');
})

.post((req,res,next)=>{

    res.end('Name of the dish' + req.body.name + 'with details' + req.body.description + 'is sent to u !!!');
})

.put((req,res,next)=>{
    
    res.statusCode = 403;    
    res.end('This is not supported');
    })


.delete((req,res,next)=>{
    
        res.end('All dishes are deleted!!');

    });

    
    
dishRouter.route('/:dishID')
    .all((req,res,next)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/plain');
        next();
    })
    
    .get((req,res,next)=>{
            res.end('Info of the dish' + req.params.dishID +'is sent to you!!');
    })
        
    .post((req,res,next)=>{
            res.statusCode = 403;
            res.end('Post is not supported');
    })
        
    .put((req,res,next)=>{
                res.write('Updating the dish :' + req.params.dishID );
                res.end('will update the new dish with name:' + req.body.name + 'with details' + req.body.description);
    })
        
        
    .delete((req,res,next)=>{
            
                res.end('Dish : ' + req.params.dishID + 'is deleted');
       }); 


    
    module.exports = dishRouter;

    