import { Direccion } from "./Direccion";

export class Persona{
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion:Direccion[];

    constructor(nom:string, apell:string, email:string, dir:Direccion[]){
        this.nombre=nom;
        this.apellido=apell;
        this.correo=email;
        this.direccion=dir;
    }
}