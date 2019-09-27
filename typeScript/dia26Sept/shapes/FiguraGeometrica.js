"use strict";
exports.__esModule = true;
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(posx, posy) {
        this._posX = posx;
        this._posY = posy;
    }
    FiguraGeometrica.prototype.getPosX = function () {
        return this._posX;
    };
    FiguraGeometrica.prototype.setPosX = function (value) {
        this._posX = value;
    };
    FiguraGeometrica.prototype.getPosY = function () {
        return this._posY;
    };
    FiguraGeometrica.prototype.setPosY = function (value) {
        this._posY = value;
    };
    FiguraGeometrica.prototype.desplazar = function (posXnew, posYnew) {
        this._posX = posXnew;
        this._posY = posYnew;
    };
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
