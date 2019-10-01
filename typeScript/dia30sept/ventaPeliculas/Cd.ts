import { Disco } from "./Disco";
import { Venta } from "./Venta";

export class Cd extends Disco{
    
    constructor(nombrePel:string, pre:number, cant:number){
        super(nombrePel,pre,cant);
    }

}