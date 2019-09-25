"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 12; }
        console.log(this.nombre + " se movio " + distancia + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
var animal = new Animal('perro');
animal.mover();
animal.mover(34);
