import { Persona } from "./Persona";
import { Direccion } from "./Direccion";

export class Estudiante extends Persona{
    constructor(n:string, a:string, c:string,d:Direccion[]){
        super(n,a,c,d);
    }
}