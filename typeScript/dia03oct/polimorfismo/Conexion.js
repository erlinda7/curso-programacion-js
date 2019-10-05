"use strict";
exports.__esModule = true;
var ConexionWifi = /** @class */ (function () {
    function ConexionWifi() {
    }
    ConexionWifi.prototype.conectar = function () {
        return "\n        Conexion via wifi\n        Obtener contrase\u00F1a \n        Conectado";
    };
    return ConexionWifi;
}());
exports.ConexionWifi = ConexionWifi;
var ConexionBluetooth = /** @class */ (function () {
    function ConexionBluetooth() {
    }
    ConexionBluetooth.prototype.conectar = function () {
        return "\n        Conexion via bluetooth\n        Emparejar con PIN\n        Conectado";
    };
    return ConexionBluetooth;
}());
exports.ConexionBluetooth = ConexionBluetooth;
var Sistema = /** @class */ (function () {
    function Sistema() {
    }
    Sistema.prototype.mostrarConexion = function (conexion) {
        return conexion.conectar();
    };
    return Sistema;
}());
exports.Sistema = Sistema;
var conexionWifi = new ConexionWifi();
var conexionBluetooth = new ConexionBluetooth();
var sistema = new Sistema();
console.log(sistema.mostrarConexion(conexionBluetooth));
