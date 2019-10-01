import { Docente } from "./Docente";

export class Curso{
    private nombre:string;
    private precio:number;
    private descripcion:string;
    private docente: Docente;

    constructor(n:string, p:number, des:string, doc:Docente ){
        this.nombre=n;
        this.precio=p;
        this.descripcion=des;
        this.docente=doc;
    }

    public getPrecio(){
        return this.precio;
    }
}