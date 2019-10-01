"use strict";
exports.__esModule = true;
var Disco = /** @class */ (function () {
    function Disco(nom, pre, s) {
        this.nombre = nom;
        this.precio = pre;
        this.stock = s;
    }
    Disco.prototype.getPrecio = function () {
        return this.precio;
    };
    Disco.prototype.setStock = function (cant) {
        this.stock -= cant;
    };
    return Disco;
}());
exports.Disco = Disco;
