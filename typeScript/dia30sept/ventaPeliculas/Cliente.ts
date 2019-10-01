export class Cliente{
    nombre:string;
    apellido:string;
    edad:number;
    tipo:string;
    
    constructor(nom:string, ape:string, e:number, t:string){
        this.nombre=nom;
        this.apellido=ape;
        this.edad=e;
        this.tipo=t;
    }
}