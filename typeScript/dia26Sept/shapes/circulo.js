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
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(px, py, r) {
        var _this = _super.call(this, px, py) || this;
        _this._radio = r;
        return _this;
    }
    Circulo.prototype.getRadio = function () {
        return this._radio;
    };
    Circulo.prototype.setRadio = function (value) {
        this._radio = value;
    };
    Circulo.prototype.area = function () {
        var area = Math.round(Math.PI * (Math.pow(this._radio, 2)));
        return area;
    };
    Circulo.prototype.perimetro = function () {
        return 0;
    };
    return Circulo;
}(FiguraGeometrica_1.FiguraGeometrica));
exports.Circulo = Circulo;
var circulo = new Circulo(50, 50, 10);
console.log("Circulo: \nposicion en x: " + circulo.getPosX() + "\nposicion en y: " + circulo.getPosY() + "\nradio:        " + circulo.getRadio() + "\narea:          " + circulo.area() + "\nperimetro:     " + circulo.perimetro());
