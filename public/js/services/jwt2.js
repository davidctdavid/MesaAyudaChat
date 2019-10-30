'use strict'
var jwt2 =  require('jwt-simple');
var moment = require('moment');
var secret = 'clave';
var procedimientoToken={};
procedimientoToken.createToken = function(usuario){
    //objeto con los datos del usuario que se quiere codificar dentro del token
    var payload = {
        user: usuario.user,
       
        iat:moment().unix(),
        exp:moment().add(30,'days').unix,
        prestamo:[],
    }
    for(var i in usuario){
        payload.prestamo.push({Num_prestamo:usuario[i].preNumero ,Num_Dias:usuario[i].preDiasMora,interes_Mora:usuario[i].preTasaInteres,institucion:usuario[i].preInstitucion});
    }
    
    return jwt2.encode(payload, secret);
}
procedimientoToken.decodeToken= function(token){
    return jwt2.decode(token,secret);
}


module.exports=procedimientoToken;