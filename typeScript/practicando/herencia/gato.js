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
var Animal_1 = require("./Animal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre) {
        return _super.call(this, nombre) || this;
    }
    Gato.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 1; }
        console.log('Caminando y ronroneando...');
        _super.prototype.mover.call(this, distancia);
    };
    return Gato;
}(Animal_1.Animal));
//let gatito:Animal=new Gato('pelusa');
var gatito = new Gato('pelusa');
gatito.mover();
