import { Persona } from "./Persona";
import { Direccion } from "./Direccion";

export class Docente extends Persona{
    private profesion:string;
    constructor(n:string, a:string, c:string,d:Direccion[], pro:string){
        
        super(n,a,c,d);
        this.profesion=pro;
    }
}