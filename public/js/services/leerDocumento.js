var fs=require("fs");
var validaciones={};






  validaciones.leerReglasTecniseguros= function(tipo){
    var data=JSON.parse(fs.readFileSync("CATEGORIAS.json", 'utf-8'));
    var obj=[]
    for(var i in data){
      
      if(data[i].TIPO==tipo.toUpperCase()){
        for(var j in data[i].SOLUCIONES){
          //console.log(data[i].SOLUCIONES)
          obj.push({"label":data[i].SOLUCIONES[j].PROBLEMA, "value": {
            "input": {
              "text": data[i].SOLUCIONES[j].PROBLEMA
            }
          }
         })
         //console.log(obj);
        }
        
      }
    }
    return obj;

}

validaciones.listarSoluciones= function(tipo,problema){
  var data=JSON.parse(fs.readFileSync("CATEGORIAS.json", 'utf-8'));
  var obj=[]
  for(var i in data){
    if (data[i].TIPO == tipo.toUpperCase()) {
      for(var j in data[i].SOLUCIONES){
        if (data[i].SOLUCIONES[j].PROBLEMA==problema) {
          obj=data[i].SOLUCIONES[j].soluciones;
        }
      }
    }
  }
  return obj;
}


validaciones.consultarTickets=function(datos){
  
  console.log("extremo");
  console.log(datos);
  var data=JSON.parse(fs.readFileSync("TICKETS.json", 'utf-8'));
  
  var obj=[]
  for(var i in data){
    if (data[i].TIPO == datos.tipo.toUpperCase()){
      for(var j in data[i].RESULTADO){
        if(data[i].RESULTADO[j].ci==datos.cedula.toString()){
          obj.push(data[i].RESULTADO[j]);
        }
      }  
    }
  }
  console.log("data");
  console.log(obj);
  return obj;
}

module.exports=validaciones