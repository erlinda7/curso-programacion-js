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
var Disco_1 = require("./Disco");
var Bluray = /** @class */ (function (_super) {
    __extends(Bluray, _super);
    function Bluray(nombrePel, pre, cant, dobleL) {
        var _this = _super.call(this, nombrePel, pre, cant) || this;
        _this.dobleLado = dobleL;
        return _this;
    }
    return Bluray;
}(Disco_1.Disco));
exports.Bluray = Bluray;
