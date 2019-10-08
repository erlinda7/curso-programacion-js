export class Cancion{
    //nombre, cancion, genero ,autor
    constructor(private nombre:string, private genero:string, private autor:string){}

    public getNombre():string{
        return this.nombre;
    }
    public getGenero():string{
        return this.genero;
    }
    public getAutor():string{
        return this.autor;
    }
    public setNombre(nombre:string){
        this.nombre=nombre;
    }
    public setGenero(genero:string){
        this.genero=genero;
    }
    public setAutor(autor:string){
        this.autor=autor;
    }
}

export class CD{
    private listaCanciones: Cancion[];
    private contador: number;

    constructor(){
        this.listaCanciones=[];
        this.contador=0;
    }
    
    //devuelve el valor del contador de canciones
    public numeroCanciones():number{
        return this.contador;
    }

    //devuelve la cancion que se encuentra en la posicion indicada
    public dameCancion(posicion:number):Cancion{
        let cancion:Cancion=null;
        for(let pos=0; pos<this.listaCanciones.length; pos++){
            if(pos==posicion){
                cancion=this.listaCanciones[pos];
            }
        }
        return cancion;
    }

    //cambia la cancion de la posicion indicada por la nueva cancion proporcionada
    public grabaCancion(posicion:number, cancion:Cancion){
        for(let pos=0; pos<this.listaCanciones.length; pos++){
            if(pos==posicion){
                this.listaCanciones[pos]=cancion;
            }
        }
    }

    //agrega al final del array la cancion proporcionada
    public agrega(cancion:Cancion){
        this.listaCanciones.push(cancion);
        this.contador++;
    }
    
    //elimina la cancion que se encuentra en la posicion indicada
    public elimina(posicion:number){
        for(let pos=0; pos<this.listaCanciones.length; pos++){
            if(pos==posicion){
                this.listaCanciones.splice(pos,1);
                this.contador--;
            }
        }
    }
}


let cancion1:Cancion=new Cancion('Amigo','Alternativa','Juan Carlos Alvarado');
let cancion2:Cancion=new Cancion('Incomparable','contemporanea','LA IBI');
let cancion3:Cancion=new Cancion('Alli quiero estar','Alternativa','Barak');
let cancion4:Cancion=new Cancion('Aqui estoy','contemporanea','Hillsong');
let cancion5:Cancion=new Cancion('Como mirarte','Alternativa','Sebastian Yatra');
let cancion6:Cancion=new Cancion('Construire mi vida','Alternativa','Evan Craf');

let cd:CD=new CD();
cd.agrega(cancion1);
cd.agrega(cancion2);
cd.agrega(cancion3);
cd.agrega(cancion4);
cd.agrega(cancion5);
cd.agrega(cancion6);

console.log("lista de canciones");
console.log(cd);

console.log("eliminando Evan craf");
cd.elimina(5);
console.log(cd);

console.log("mostrando cancion");
console.log(cd.dameCancion(1));

console.log("\ncambiando cancion tercer cielo");
let cancion7:Cancion=new Cancion('Creere','Alternativa','Tercer Cielo');
cd.grabaCancion(0,cancion7);
console.log(cd);