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
    Animal.prototype.getNombre = function () {
        return this.nombre;
    };
    Animal.prototype.setNombre = function (nombre) {
        if (nombre.length <= Animal.LONGITUD_MAXIMA) {
            console.log('Error. El nombre es muy corto');
            return;
        }
        this.nombre = nombre;
    };
    Animal.LONGITUD_MAXIMA = 5;
    return Animal;
}());
exports.Animal = Animal;
