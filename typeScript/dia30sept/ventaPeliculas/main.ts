import { Cd } from "./Cd";
import { Dvd } from "./Dvd";
import { Bluray } from "./Bluray";
import { VentaDisco } from "./VentaDisco";
import { Cliente } from "./Cliente";
import { Tienda } from "./Tienda";

let cd1:Cd=new Cd('Los vengadores', 5,50);
let cd2:Cd=new Cd('La propuesta', 6,40);

let dvd1:Dvd=new Dvd('La bella durmiente', 7,30);
let dvd2:Dvd=new Dvd('La cenicienta', 8,20);




let bluray1:Bluray=new Bluray('Nacido para matar', 15,10, true);
let bluray2:Bluray=new Bluray('La huerfana', 20,10 , false);

let cliente1: Cliente=new Cliente ('Juancito','Perez',21,'frecuente');
let cliente2: Cliente=new Cliente ('Gladys','Zarsuri',22,'frecuente');
let cliente3: Cliente=new Cliente ('Luis','Ruiz',12,'poco frecuente');

let venta1:VentaDisco=new VentaDisco(cd1,cliente1,'21-03-2019');
let venta2:VentaDisco=new VentaDisco(dvd1,cliente2,'03-05-2019');
let venta3:VentaDisco=new VentaDisco(bluray1,cliente3,'12-11-2019');
let venta4:VentaDisco=new VentaDisco(cd1,cliente1,'21-03-2019');


let tienda:Tienda=new Tienda('El pato Lucas');

tienda.registrarPeliculas(cd1);
tienda.registrarPeliculas(cd2);
tienda.registrarPeliculas(dvd1);
tienda.registrarPeliculas(dvd2);
tienda.registrarPeliculas(bluray1);
tienda.registrarPeliculas(bluray2);

tienda.vender(venta2,2);
tienda.vender(venta1,2);
tienda.vender(venta3,2);
tienda.vender(venta4,2);

console.log('venta cds: '+ tienda.ventaCd());
console.log('venta dvds: '+tienda.ventaDvd());
console.log('venta Bluray: '+tienda.ventaBluray());
console.log('venta total:  '+tienda.ventaTotal());

console.log('peliculas disponible antes de vender:')
console.log(tienda.peliculasDiponibles());
console.log('peliculas vendidas:')
console.log(tienda.peliculasVendidas());

console.log('peliculas disponible despues de vender:')
console.log(tienda.peliculasDiponibles());












