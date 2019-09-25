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
    private nombre: string;
    private capacidad: number;

    constructor(nom:string, cap:number){
        this.nombre=nom;
        this.capacidad=cap;
    }

    public setNombre(nombre: string):void{
        this.nombre=nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setCapacidad(capacidad: number) {
        this.capacidad = capacidad;
    }

    public getCapacidad(): number {
        return this.capacidad;
    }
}

export class BarMan{
    private nombre: string;
    private apellido: string;

    constructor(nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setApellido(apellido: string) {
        this.apellido = apellido;
    }

    public getApellido(): string {
        return this.apellido;
    }

}

export class Tragos{
    private nombre: string;
    private color: string;
    private cantidad: number;

    constructor( nombre: string,color:string,cantidad:number){
        this.nombre=nombre;
        this.color=color;
        this.cantidad=cantidad;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getColor(): string {
        return this.color;
    }
    public setColor(color: string) {
        this.color = color;
    }

    public getCantidad(): number {
        return this.cantidad;
    }
    public setCantidad(cantidad: number) {
        this.cantidad = cantidad;
    }
}


var bar1:Bar=new Bar("La nuevaEra",200);
//var bar2:Bar=new Bar("El patio",200);


console.log(bar1);
console.log('\nCambiando valores: ');

bar1.setNombre('El pueblito');
bar1.setCapacidad(90);
console.log(`Nombre del Bar: ${bar1.getNombre()} 
Capacidad: ${bar1.getCapacidad()}  `);
