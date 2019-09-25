import { Animal } from "./Animal";

class Gato extends Animal{
    constructor(nombre:string){
        super(nombre);
    }

    mover(distancia: number=1){
        console.log('Caminando y ronroneando...');
        super.mover(distancia);
    }
}

//let gatito:Animal=new Gato('pelusa');
let gatito:Gato =new Gato('pelusa');
gatito.mover();