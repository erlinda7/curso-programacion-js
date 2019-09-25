"use strict";
/**
 * Concepto: son las caracteristicas individuales
 * que diferencian un objeto de otro y determinan su apariencia,
 * estado u otras cualidades. Los atributos se guardan en variables
 * denominados de instancia, y cada objeto particular puede tener
 * valores distintos para estas variables
 */
exports.__esModule = true;
/**
 * En programacion orientada a objetos (POO),
 * un constructor es una subrutina cuya mision es inicializar un objeto
 *
 */
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan() {
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Tragos = /** @class */ (function () {
    function Tragos() {
    }
    return Tragos;
}());
exports.Tragos = Tragos;
var bar1 = new Bar("La nuevaEra", 200);
var bar2 = new Bar("El patio", 200);
console.log(bar1);
console.log(bar2);
