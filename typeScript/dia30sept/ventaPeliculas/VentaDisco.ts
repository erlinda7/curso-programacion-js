import { Disco } from "./Disco";
import { Cliente } from "./Cliente";

export class VentaDisco{
    private disco:Disco;
    private cliente:Cliente;
    private fecha:string;

    constructor(disco:Disco, cliente:Cliente, fecha:string){
        this.disco=disco;
        this.cliente=cliente;
        this.fecha=fecha;
    }

    public getDisco():Disco{
        return this.disco;
    }

    
}