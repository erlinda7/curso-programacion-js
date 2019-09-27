import { Docente } from "./Docente";

export class Curso{
    private nombre:string;
    private precio:string;
    private descripcion:string;
    private docente: Docente;

    constructor(n:string, p:string, des:string, doc:Docente ){
        this.nombre=n;
        this.precio=p;
        this.descripcion=des;
        this.docente=doc;
    }
}