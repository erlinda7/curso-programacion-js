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
    Bar.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.setCapacidad = function (capacidad) {
        this.capacidad = capacidad;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    BarMan.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Tragos = /** @class */ (function () {
    function Tragos(nombre, color, cantidad) {
        this.nombre = nombre;
        this.color = color;
        this.cantidad = cantidad;
    }
    Tragos.prototype.getNombre = function () {
        return this.nombre;
    };
    Tragos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Tragos.prototype.getColor = function () {
        return this.color;
    };
    Tragos.prototype.setColor = function (color) {
        this.color = color;
    };
    Tragos.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Tragos.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    };
    return Tragos;
}());
exports.Tragos = Tragos;
var bar1 = new Bar("La nuevaEra", 200);
//var bar2:Bar=new Bar("El patio",200);
console.log(bar1);
console.log('\nCambiando valores: ');
bar1.setNombre('El pueblito');
bar1.setCapacidad(90);
console.log("Nombre del Bar: " + bar1.getNombre() + " \nCapacidad: " + bar1.getCapacidad() + "  ");
