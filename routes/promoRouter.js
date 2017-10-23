const express = require('express');
const bodyParser = require('body-parser');

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
 
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();

}) 
.get((req,res,next)=>{

    res.end('Info of the promotion is displayed for you!!');

})

.post((req,res,next)=>{

    res.end('Promotion name : ' + req.body.name + " with details : " + req.body.description);

})
.put((req,res,next)=>{
 
    res.statusCode = 403;
    res.end('Not supported');

})

.delete((req,res,next)=>{

    res.end('deleted all promotional infos!!');

});

promoRouter.route('/:promoID')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})

.get((req,res,next)=>{
        res.end('Info of the promo ' + req.params.promoID +'is sent to you!!');
})
    
.post((req,res,next)=>{
        res.statusCode = 403;
        res.end('Post is not supported');
})
    
.put((req,res,next)=>{
            res.write('Updating the promoID :' + req.params.promoID + '/n' );
            res.end('will update the new promoID with name:' + req.body.name + 'with details' + req.body.description);
})
    
    
.delete((req,res,next)=>{
        
            res.end('Promo : ' + req.params.promoID + 'is deleted');
   }); 

    module.exports = promoRouter;