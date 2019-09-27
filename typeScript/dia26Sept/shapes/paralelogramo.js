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
var Rectangle_1 = require("./Rectangle");
var Paralelogramo = /** @class */ (function (_super) {
    __extends(Paralelogramo, _super);
    function Paralelogramo(px, py, h, w) {
        return _super.call(this, px, py, h, w) || this;
    }
    return Paralelogramo;
}(Rectangle_1.Rectangle));
exports.Paralelogramo = Paralelogramo;
var parelogramo = new Paralelogramo(10, 10, 30, 20);
console.log("Paralelogramo: \nposicion en x: " + parelogramo.getPosX() + "\nposicion en y: " + parelogramo.getPosY() + "\naltura:        " + parelogramo.getHeigth() + "\nancho:         " + parelogramo.getWidth() + " \narea:          " + parelogramo.area() + "\nperimetro:     " + parelogramo.perimetro());
