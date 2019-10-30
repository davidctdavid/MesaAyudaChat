const configMensaje = require('../services/mail');
var fs=require("fs");
var validaciones={};

var validCedula={
    msjC:"",
  
    cedulaFinal:"",
    ok:""
  }

//valida el nuero de cedula
validaciones.validarCedula=function(cedula){
  var expresion = /([A-z])/g;
  var hallado = cedula.replace(expresion,'').trim();    
  cedula=hallado;
  var okcedula = validaciones.validarLongitudCedula(cedula);
  cedula=okcedula.cedulaFinal;
  if(okcedula.ok == true){
    if(cedula!=undefined){      
      return "Cedula Correcta";
    }
  }else{
    return "Cedula Incorrecta";
  }
}


validaciones.enviarEmail=function(usuario,token){
  
    configMensaje(usuario,token);
  }

validaciones.validarLongitudCedula=function (cedula){
    
  var cad = cedula;
  
  var ok = false;
  var total = 0;
  var longitud = cad.length;
  var longcheck = longitud - 1;
  
  if(cad !== "" && longitud >= 9 && longitud <= 13){
  
    if(cad !== "" && longitud === 9){
      cad = '0'+cad;
      longitud = cad.length;
      if (cad !== "" && longitud === 10){
        for(i = 0; i < longcheck; i++){
          if (i%2 === 0) {
            var aux = cad.charAt(i) * 2;
            if (aux > 9) aux -= 9;
            total += aux;
          } else {
            total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
          }
        }
      
        total = total % 10 ? 10 - total % 10 : 0;
      
        if (cad.charAt(longitud-1) == total) {
          validCedula.msjC = "Cedula valida";
          validCedula.cedulaFinal = cad;
          validCedula.ok = true;
          return validCedula;
        }else{
  
          validCedula.msjC = "Cedula no valida";
          validCedula.cedulaFinal = cad;
          validCedula.ok = false;
          return validCedula;
        }
      }
    }else if (cad !== "" && longitud === 10){
  
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }
    
      total = total % 10 ? 10 - total % 10 : 0;
  
      if (cad.charAt(longitud-1) == total) {
  
       
        validCedula.msjC = "Cedula valida";
          validCedula.cedulaFinal = cad;
          validCedula.ok = true;
          return validCedula;
      }else{
    
        validCedula.msjC = "Cedula no valida";
          validCedula.cedulaFinal = cad;
          validCedula.ok = false;
          return validCedula;
      }
    }else if(cad !== "" && longitud === 12){
      cad = '0'+cad;
      longitud = cad.length;
      if (cad !== "" && longitud === 13){
        var ced="";
        var rucI="";
        for(i = 0; i < 13; i++){
          
          if(i < 10){
            ced += cad[i];
          }
          if(i >= 10){
            rucI += cad[i];
          }
          
        }
      for(i = 0; i < longcheck; i++){
          if (i%2 === 0) {
            var aux = ced.charAt(i) * 2;
            if (aux > 9) aux -= 9;
            total += aux;
          } else {
            total += parseInt(ced.charAt(i)); // parseInt o concatenará en lugar de sumar
          }
        }
      
        total = total % 10 ? 10 - total % 10 : 0;
        var regExp = /^[0]{1}[0]{1}[1]{1}$/i;
        if (ced.charAt(longitud-1) == total && regExp.test(rucI)) {
          
          validCedula.msjC = "Ruc valido";
          validCedula.cedulaFinal = ced+rucI;
          validCedula.ok = true;
          return validCedula;
        }else{
          validCedula.msjC = "Ruc no valido";
          validCedula.cedulaFinal = ced+rucI;
          validCedula.ok = false;
          return validCedula;
        }
  
      }
    }else if (cad !== "" && longitud === 13){
      var ced="";
      var rucI="";
      for(i = 0; i < 13; i++){
        
        if(i < 10){
          ced += cad[i];
        }
        if(i >= 10){
          rucI += cad[i];
        }
        
      }
    for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = ced.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(ced.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }
    
      total = total % 10 ? 10 - total % 10 : 0;
      var regExp = /^[0]{1}[0]{1}[1]{1}$/i;
      if (ced.charAt(longitud-1) == total && regExp.test(rucI)) {
        
        validCedula.msjC = "Ruc valido";
        validCedula.cedulaFinal = ced+rucI;
        validCedula.ok = true;
        return validCedula;
      }else{
        validCedula.msjC = "Ruc no valido";
        validCedula.cedulaFinal = ced+rucI;
        validCedula.ok = false;
        return validCedula;
      }
  
    }
    
    
    else{
  
      validCedula.msjC = "Cedula invalida";
      validCedula.cedulaFinal = cad;
      validCedula.ok = false;
      return validCedula;
    }
    
  }else{
    validCedula.msjC = "Cedula o ruc no validos";
    validCedula.cedulaFinal = cad;
    validCedula.ok = false;
    return validCedula;
  }
  
  
   
  }

  module.exports=validaciones


  