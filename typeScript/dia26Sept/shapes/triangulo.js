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
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(nombre, px, py, h, b) {
        var _this = _super.call(this, nombre, px, py) || this;
        _this._altura = h;
        _this._base = b;
        return _this;
    }
    Triangulo.prototype.getBase = function () {
        return this._base;
    };
    Triangulo.prototype.setBase = function (value) {
        this._base = value;
    };
    Triangulo.prototype.getAltura = function () {
        return this._altura;
    };
    Triangulo.prototype.setAltura = function (value) {
        this._altura = value;
    };
    Triangulo.prototype.area = function () {
        var area = (this._base * this._altura) / 2;
        return (area);
    };
    Triangulo.prototype.perimetro = function () {
        return 0;
    };
    return Triangulo;
}(FiguraGeometrica_1.FiguraGeometrica));
exports.Triangulo = Triangulo;
