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
var Trapezoide = /** @class */ (function (_super) {
    __extends(Trapezoide, _super);
    function Trapezoide(px, py, lc, lL, h) {
        var _this = _super.call(this, px, py) || this;
        _this._ladoCorto = lc;
        _this._ladoLargo = lL;
        _this._altura = h;
        return _this;
    }
    Trapezoide.prototype.getLadoCorto = function () {
        return this._ladoCorto;
    };
    Trapezoide.prototype.setLadoCorto = function (value) {
        this._ladoCorto = value;
    };
    Trapezoide.prototype.getLadoLargo = function () {
        return this._ladoLargo;
    };
    Trapezoide.prototype.setLadoLargo = function (value) {
        this._ladoLargo = value;
    };
    Trapezoide.prototype.getAltura = function () {
        return this._altura;
    };
    Trapezoide.prototype.setAltura = function (value) {
        this._altura = value;
    };
    Trapezoide.prototype.area = function () {
        var area = ((this._ladoCorto + this._ladoLargo) / 2) * this._altura;
        return area;
    };
    Trapezoide.prototype.perimetro = function () {
        return 0;
    };
    return Trapezoide;
}(FiguraGeometrica_1.FiguraGeometrica));
exports.Trapezoide = Trapezoide;
var trapezoide = new Trapezoide(40, 40, 20, 50, 10);
console.log("Trapezoide: \nposicion en x: " + trapezoide.getPosX() + "\nposicion en y: " + trapezoide.getPosY() + "\nlado corto:    " + trapezoide.getLadoCorto() + "\nlado largo:    " + trapezoide.getLadoLargo() + "\naltura:        " + trapezoide.getAltura() + "\narea:          " + trapezoide.area() + "\nperimetro:     " + trapezoide.perimetro());
