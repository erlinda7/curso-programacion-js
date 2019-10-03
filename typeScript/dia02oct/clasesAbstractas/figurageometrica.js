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
Object.defineProperty(exports, "__esModule", { value: true });
var FiguraGeometrica = /** @class */ (function () {
    /*
    private _ancho:number;
    private _alto:number;
    constructor(_ancho:number, _alto:number){
        this._ancho=_ancho;
        this._alto=_alto;
    }
    */
    //otra forma de implemtar constructor
    function FiguraGeometrica(_ancho, _alto) {
        this._ancho = _ancho;
        this._alto = _alto;
    }
    Object.defineProperty(FiguraGeometrica.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (ancho) {
            this._ancho = ancho;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiguraGeometrica.prototype, "alto", {
        get: function () {
            return this._alto;
        },
        set: function (alto) {
            this._alto = alto;
        },
        enumerable: true,
        configurable: true
    });
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(ancho, alto, _profundidad) {
        var _this = _super.call(this, ancho, alto) || this;
        _this._profundidad = _profundidad;
        return _this;
    }
    Object.defineProperty(Rectangulo.prototype, "profundidad", {
        get: function () {
            return this._profundidad;
        },
        set: function (profundidad) {
            this._profundidad = profundidad;
        },
        enumerable: true,
        configurable: true
    });
    Rectangulo.prototype.getArea = function () {
        var area = this.ancho * this.alto;
        return area;
    };
    Rectangulo.prototype.getVolumen = function () {
        var volumen = this.ancho * this.alto * this.profundidad;
        return volumen;
    };
    return Rectangulo;
}(FiguraGeometrica));
exports.Rectangulo = Rectangulo;
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, alto) {
        return _super.call(this, base, alto) || this;
    }
    Triangulo.prototype.getArea = function () {
        var area = (this.ancho * this.alto) / 2;
        return area;
    };
    Triangulo.prototype.getVolumen = function () {
        var volumen = this.ancho * this.ancho * this.alto;
        var texto = "\n                          ______________________\n                         |                      |\n                         |                      |\n                         |                      |\n                         |______________________|";
        console.log(texto);
        return volumen;
    };
    return Triangulo;
}(FiguraGeometrica));
exports.Triangulo = Triangulo;
var triangulo1 = new Triangulo(10, 20);
console.log('area del triangulo: ' + triangulo1.getArea());
console.log('volumen del triangulo: ' + triangulo1.getVolumen());
var rectagulo1 = new Rectangulo(30, 40, 10);
console.log('area del rectagulo: ' + rectagulo1.getArea());
console.log('volumen de rectagulo: ' + rectagulo1.getVolumen());
