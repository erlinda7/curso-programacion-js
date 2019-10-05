export interface Vehiculo{

    informacion():string;

}

export class Coche2 {

    public informacion():string{
        return 'soy un coche...........';
    }
}

export class Moto implements Vehiculo{
    public informacion():string{
        return 'soy una moto...........';
    }

}

export class Bus implements Vehiculo{
    public informacion():string{
        return 'soy un bus...........';
    }

}

export class Parqueo{
    public estacionar(vehiculo: Vehiculo):string{
        return `
        * Entrar en el parqueo
        * Recoger el tickect de entrada
        * Buscar un espacio
        * Situar el vehiculo dentro el espacio`
        }
}

export class flota {

}
//let coche2:Coche2=new Coche2();
let moto:Vehiculo=new Moto();
let bus:Vehiculo=new Bus();

let f:flota=new flota();
let parqueo:Parqueo=new Parqueo();

console.log(parqueo.estacionar(f));




/////////////////////////

/*let listaVehiculos:Vehiculo[]=[];

listaVehiculos.push(coche);
listaVehiculos.push(moto);
listaVehiculos.push(bus);

for (const v of listaVehiculos) {
    console.log(v.informacion());
}
*/
