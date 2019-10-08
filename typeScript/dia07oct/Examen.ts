export class Documento{
    

    constructor(protected codigo:string, protected nroEjemDisp:number, protected nroEjemPres:number){} 
}

export class Libro extends Documento{
    constructor(protected codigo:string, protected nroEjemDisp:number, protected nroEjemPres:number, private titulo:string, private editorial:string, private edicion:number, private autor:string ){
        super(codigo,nroEjemDisp,nroEjemPres);
    }
}

export class Revista extends Documento{
    constructor(protected codigo:string, protected nroEjemDisp:number, protected nroEjemPres:number, private nombre:string, private volumen:string, private area:string){
        super(codigo,nroEjemDisp,nroEjemPres);
    }
}

export class Periodico extends Documento{
    constructor(protected codigo:string, protected nroEjemDisp:number, protected nroEjemPres:number, private nombre:string, private fecha:string, private contenido:string){
        super(codigo,nroEjemDisp,nroEjemPres);
    }
}

export class Lector{
    constructor(private nombre:string, private apellido:string, private ci:string){}
}