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
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(nombrePel, pre, cant) {
        return _super.call(this, nombrePel, pre, cant) || this;
    }
    return Dvd;
}(Disco_1.Disco));
exports.Dvd = Dvd;