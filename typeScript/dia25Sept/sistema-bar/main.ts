/**
 * Concepto: son las caracteristicas individuales
 * que diferencian un objeto de otro y determinan su apariencia,
 * estado u otras cualidades. Los atributos se guardan en variables
 * denominados de instancia, y cada objeto particular puede tener
 * valores distintos para estas variables
 */

/**
 * En programacion orientada a objetos (POO),
 * un constructor es una subrutina cuya mision es inicializar un objeto
 * 
 */

export class Bar{
    nombre:string;
    capacidad:number;
    constructor(nom:string, cap:number){
        this.nombre=nom;
        this.capacidad=cap;
    }

}

export class BarMan{
    nombre:string;
    apellido:string;

    constructor(nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

export class Tragos{
    nombre: string;
    color:string;
    cantidad:number;

    constructor( nombre: string,color:string,cantidad:number){
        this.nombre=nombre;
        this.color=color;
        this.cantidad=cantidad;
    }
}


var bar1:Bar=new Bar("La nuevaEra",200);
var bar2:Bar=new Bar("El patio",200);
console.log(bar1);
console.log(bar2);


