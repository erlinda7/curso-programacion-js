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
var Largometraje = /** @class */ (function () {
    function Largometraje() {
    }
    return Largometraje;
}());
exports.Largometraje = Largometraje;
var Pelicula = /** @class */ (function (_super) {
    __extends(Pelicula, _super);
    function Pelicula() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pelicula;
}(Largometraje));
exports.Pelicula = Pelicula;
var Documental = /** @class */ (function (_super) {
    __extends(Documental, _super);
    function Documental() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Documental;
}(Largometraje));
exports.Documental = Documental;
var Cine = /** @class */ (function () {
    function Cine() {
    }
    Cine.prototype.reproducir = function (largometraje) {
        return "\n        * Poner la cinta en el proyector\n        * Dar play\n        * Crear un registro con el n\u00FAmero de entradas vendidas\n        * Parar la cinta cuando llega al final\n        ";
    };
    return Cine;
}());
exports.Cine = Cine;
var pelicula = new Pelicula();
var documental = new Documental();
var cine = new Cine();
console.log(cine.reproducir(pelicula));
