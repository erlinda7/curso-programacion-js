import { Direccion } from "./Direccion";

export class Persona{
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion:Direccion[];

   constructor (nom:string, apell:string, email:string, direcc:Direccion){
        this.nombre=nom;
        this.apellido=apell;
        this.correo=email;
        this.direccion=[direcc];
    }

    public agregarDireccion(dir: Direccion){
            this.direccion.push(dir);
    }
}