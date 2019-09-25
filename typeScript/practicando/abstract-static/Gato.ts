import { Animal } from "./Animal";

export class Gato extends Animal{
    constructor(nombre:string){
        super(nombre);
    }

    mover(distancia: number=1){
        console.log('Caminando y ronroneando...');
        super.mover(distancia);
    }

    hacerSonido():void{
        console.log(`${this.getNombre()}  dice  Miaaauuuuu`);
    }
}

let gatoPequeño: Animal =new Gato('Sasy');
gatoPequeño.mover();
gatoPequeño.hacerSonido();