import { Disco } from "./Disco";

export class Bluray extends Disco{
    private dobleLado:boolean;
    constructor(nombrePel:string, pre:number,cant:number, dobleL:boolean){
        super(nombrePel,pre,cant);
        this.dobleLado=dobleL;
    }

}