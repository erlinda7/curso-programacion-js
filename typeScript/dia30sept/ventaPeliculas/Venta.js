"use strict";
exports.__esModule = true;
var Venta = /** @class */ (function () {
    function Venta() {
    }
    Venta.prototype.vender = function (pelicula) {
        this.listaVendidos.push(pelicula);
    };
    Venta.prototype.vendidos = function () {
        return this.listaVendidos;
    };
    return Venta;
}());
exports.Venta = Venta;
