"use strict";
exports.__esModule = true;
var Coche2 = /** @class */ (function () {
    function Coche2() {
    }
    Coche2.prototype.informacion = function () {
        return 'soy un coche...........';
    };
    return Coche2;
}());
exports.Coche2 = Coche2;
var Moto = /** @class */ (function () {
    function Moto() {
    }
    Moto.prototype.informacion = function () {
        return 'soy una moto...........';
    };
    return Moto;
}());
exports.Moto = Moto;
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.informacion = function () {
        return 'soy un bus...........';
    };
    return Bus;
}());
exports.Bus = Bus;
var Parqueo = /** @class */ (function () {
    function Parqueo() {
    }
    Parqueo.prototype.estacionar = function (vehiculo) {
        return "\n        * Entrar en el parqueo\n        * Recoger el tickect de entrada\n        * Buscar un espacio\n        * Situar el vehiculo dentro el espacio";
    };
    return Parqueo;
}());
exports.Parqueo = Parqueo;
var coche2 = new Coche2();
var moto = new Moto();
var bus = new Bus();
var parqueo = new Parqueo();
console.log(parqueo.estacionar(coche2));
/////////////////////////
/*let listaVehiculos:Vehiculo[]=[];

listaVehiculos.push(coche);
listaVehiculos.push(moto);
listaVehiculos.push(bus);

for (const v of listaVehiculos) {
    console.log(v.informacion());
}
*/
