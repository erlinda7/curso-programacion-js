export abstract class Animal{
    static LONGITUD_MAXIMA=5;
    private nombre:string;
     
    protected constructor( nombre:string){
        this.nombre=nombre;
    }

    abstract hacerSonido():void;

    mover(distancia: number=12){
        console.log(`${this.nombre} se movio ${distancia}m.`);

    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre: string):void{
        if(nombre.length<=Animal.LONGITUD_MAXIMA){
            console.log('Error. El nombre es muy corto');
            return;
        }
        this.nombre=nombre;
    }

}

