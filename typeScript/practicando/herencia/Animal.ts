export class Animal{
    nombre:string;
     constructor( nombre:string){
        this.nombre=nombre;
    }
    mover(distancia: number=12){
        console.log(`${this.nombre} se movio ${distancia}m.`);

    }


}

let animal:Animal=new Animal('perro');

animal.mover();
animal.mover(34);