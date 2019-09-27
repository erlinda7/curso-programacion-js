export class Direccion{
    private ciudad:string;
    private barrio:string;
    private calle:string;

    constructor(ci:string, ba:string, ca:string){
        this.ciudad=ci;
        this.barrio=ba;
        this.calle=ca;
    }
}