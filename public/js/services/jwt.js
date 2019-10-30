'use strict'
var jwt =  require('jwt-simple');
var moment = require('moment');
var secret = 'clave';
var procedimientoToken={};
procedimientoToken.createToken = function(usuario){
    //objeto con los datos del usuario que se quiere codificar dentro del token
    var payload = {
        Nom_Persona: usuario[0].Nom_Persona,
        Num_Identificacion:usuario[0].Num_Identificacion,
        iat:moment().unix(),
        exp:moment().add(30,'days').unix,
        prestamo:[],
    }
    for(var i in usuario){
        payload.prestamo.push(usuario[i]);
    }
    return jwt.encode(payload, secret);
}
procedimientoToken.decodeToken= function(token){
    return jwt.decode(token,secret);
}


module.exports=procedimientoToken;