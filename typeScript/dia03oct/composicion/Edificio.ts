export class Edificio{
    private ascensor:boolean;

    constructor(as:boolean){
        this.ascensor=as;
    }
    public getAscensor(){
        return this.ascensor;
    }

    public setAscensor(a:boolean):void{
        this.ascensor=a;
    }
}

export class Hotel extends Edificio{
    private habitaciones:number;
    constructor(a:boolean, h:number){
        super(a);
        this.habitaciones=h;
    }

    public getHabitacion():number{
        return this.habitaciones
    }

    public setHabitacion(h:number){
        this.habitaciones=h;
    }
}

export class Restaurant extends Edificio{
    private mesas:number;

    constructor(a:boolean, m:number){
        super(a);
        this.mesas=m;
    }
    public getMesas():number{
        return this.mesas;
    }

    public setMesas(m:number){
        this.mesas=m;
    }
}

