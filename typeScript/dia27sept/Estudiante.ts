import { Persona } from "./cursoOnline/Persona";
import { Direccion } from "./cursoOnline/Direccion";

export class Estudiante extends Persona{
    constructor(n:string, a:string, c:string,d:Direccion[]){
        super(n,a,c,d);
    }
}