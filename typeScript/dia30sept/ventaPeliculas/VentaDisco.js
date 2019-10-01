"use strict";
exports.__esModule = true;
var VentaDisco = /** @class */ (function () {
    function VentaDisco(disco, cliente, fecha) {
        this.disco = disco;
        this.cliente = cliente;
        this.fecha = fecha;
    }
    VentaDisco.prototype.getDisco = function () {
        return this.disco;
    };
    return VentaDisco;
}());
exports.VentaDisco = VentaDisco;
/**tiene discos y clientes, fecha */ 
