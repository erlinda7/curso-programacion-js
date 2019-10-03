"use strict";
exports.__esModule = true;
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(nombre, posx, posy) {
        this._nombre = nombre;
        this._posX = posx;
        this._posY = posy;
    }
    FiguraGeometrica.prototype.desplazar = function (posXnew, posYnew) {
        this._posX = posXnew;
        this._posY = posYnew;
    };
    FiguraGeometrica.prototype.mostrarInformacion = function () {
        return "Nombre: " + this._nombre + "\n        posicion X: " + this._posX + "\n        posicion Y: " + this._posY;
    };
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
