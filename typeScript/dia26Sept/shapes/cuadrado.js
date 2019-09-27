"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var FiguraGeometrica_1 = require("./FiguraGeometrica");
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(px, py, l) {
        var _this = _super.call(this, px, py) || this;
        _this._lado = l;
        return _this;
    }
    Cuadrado.prototype.getLado = function () {
        return this._lado;
    };
    Cuadrado.prototype.setLado = function (value) {
        this._lado = value;
    };
    Cuadrado.prototype.area = function () {
        return (2 * this._lado);
    };
    Cuadrado.prototype.perimetro = function () {
        return (4 * this._lado);
    };
    return Cuadrado;
}(FiguraGeometrica_1.FiguraGeometrica));
exports.Cuadrado = Cuadrado;
var cuadrado = new Cuadrado(5, 5, 20);
console.log("Cuadrado: \nposicion en x: " + cuadrado.getPosX() + "\nposicion en y: " + cuadrado.getPosY() + "\nlado:        " + cuadrado.getLado() + "\narea:          " + cuadrado.area() + "\nperimetro:     " + cuadrado.perimetro());
