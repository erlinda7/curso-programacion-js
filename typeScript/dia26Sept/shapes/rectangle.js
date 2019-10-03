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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(nombre, px, py, h, w) {
        var _this = _super.call(this, nombre, px, py) || this;
        _this.heigth = h;
        _this.width = w;
        return _this;
    }
    Rectangle.prototype.getHeigth = function () {
        return this.heigth;
    };
    Rectangle.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (w) {
        this.width = w;
    };
    Rectangle.prototype.area = function () {
        var area = this.heigth * this.width;
        return area;
    };
    Rectangle.prototype.perimetro = function () {
        var per = 2 * (this.heigth + this.width);
        return per;
    };
    return Rectangle;
}(FiguraGeometrica_1.FiguraGeometrica));
exports.Rectangle = Rectangle;
