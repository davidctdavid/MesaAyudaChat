module.exports =class WatsonResulado{
    
    constructor (consultado,docs,cedula,validacionCedula,problema,soluciones, tipo,contador,solucion,prioridad,descripcion,tipos,negativos){
        this.cedula=cedula;
        this.prioridad=prioridad;
        this.tipo=tipo;
        this.problema=problema;
        this.soluciones=soluciones;
        this.consultado=consultado;
        this.docs=docs;
        this.validacionCedula=validacionCedula;
        this.contador=contador;
        this.solucion=solucion;
        this.descripcion=descripcion;
        this.tipos=tipos;
        this.negativos=negativos;
    }

}

