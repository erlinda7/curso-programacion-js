"use strict";
exports.__esModule = true;
var Banco = /** @class */ (function () {
    function Banco(saldo, mov) {
        this._saldo = saldo;
        this._movimientos = mov;
    }
    Banco.prototype.getSaldo = function () {
        return this._saldo;
    };
    Banco.prototype.setSaldo = function (value) {
        this._saldo = value;
    };
    Banco.prototype.getMovimientos = function () {
        return this._movimientos;
    };
    Banco.prototype.setMovimientos = function (value) {
        this._movimientos = value;
    };
    Banco.prototype.ingreso = function (monto) {
        this._saldo += monto;
        this._movimientos.push("Ingreso de " + monto + " bs");
    };
    Banco.prototype.reintegro = function (montoR) {
        this._saldo += montoR;
        this._movimientos.push("Reintegro de " + montoR + " bs");
    };
    Banco.prototype.transferencia = function (montoT) {
        this._saldo -= montoT;
        this._movimientos.push("transferencia de " + montoT + " bs");
    };
    return Banco;
}());
exports.Banco = Banco;
var banco = new Banco(0, []);
banco.ingreso(300);
banco.reintegro(200);
banco.transferencia(100);
console.log(banco);
