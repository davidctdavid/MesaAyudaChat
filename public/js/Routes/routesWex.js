var express = require('express');
var router = express.Router();
var controllereWex=require('../Controller/controllerWex');


const validatePayloadMiddleware = (req,res,next)=>{

    if(req.body){
        next();
    }else{
        res.status(403).send({
            errorMessage: 'you need a parload'
        })
    }
}

router.post('/enviarMensaje', validatePayloadMiddleware,controllereWex.postEnviarMensajeWex);
router.post('/llamadaWatson', validatePayloadMiddleware,controllereWex.postllamadaWatson);
router.post('/pruebas', validatePayloadMiddleware,controllereWex.pruebas);

module.exports=router;