var fs=require("fs");
var escribir={};
var moment=require('moment');
var modelo=[
    {"TIPO":"RED", "RESULTADO":[
        {"ci":"12345679890","numticket":"342564","descripcion":"descrip","solucion":"solucion","Gravedad":"gravedad"},
        {"ci":"12345679890","numticket":"342564","descripcion":"descrip","solucion":"solucion","Gravedad":"gravedad"}
      ]},
      {"TIPO":"HARDWARE", "RESULTADO":[
        {"ci":"12345679890","numticket":"342564","descripcion":"descrip","solucion":"solucion","Gravedad":"gravedad"},
        {"ci":"12345679890","numticket":"342564","descripcion":"descrip","solucion":"solucion","Gravedad":"gravedad"}
      ]},
      {"TIPO":"SOFTWARE", "RESULTADO":[
        {"ci":"12345679890","numticket":"342564","descripcion":"descrip","solucion":"solucion","Gravedad":"gravedad"},
        {"ci":"12345679890","numticket":"342564","descripcion":"descrip","solucion":"solucion","Gravedad":"gravedad"}
      ]}
  ]


escribir.crearTicket=function(datos){
    var gravedad="otro";
    if(datos.prioridad=="1 Impacto empresarial crítico (la producción o el servicio están inactivos)"){
        gravedad="10";
    }else if(datos.prioridad=="2 Impacto importante (algún sistema está inactivo)"){
        gravedad="7";
    }else if(datos.prioridad=="3 Impacto empresarial "){
        gravedad="4";
    }else if(datos.prioridad=="4 Impacto mínimo (preguntas sobre procedimientos, problemas de menor importancia)"){
        gravedad="1";
    }

    try {
        var data=JSON.parse( fs.readFile("TICKETS.json", 'utf-8'));
        
    for(var i in data){
        if(data[i].TIPO==datos.tipo){
            
            data[i].RESULTADO.push(
                {
                "ci":datos.cedula.toString(),
                "numticket":"TICKET"+moment.now(),
                "descripcion":datos.descripcion,
                "solucion":datos.solucion,
                "Gravedad":datos.prioridad,
                "nivelGravedad":gravedad,
                "fecha":moment().format("MMMM Do YYYY, h:mm:ss a")
            })
        }
    }
    fs.writeFile("TICKETS.json",JSON.stringify(data))
    } catch (error) {
        console.log(error);
    }
    

}

module.exports=escribir;