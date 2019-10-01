"use strict";
exports.__esModule = true;
var PlataformaEducativa = /** @class */ (function () {
    function PlataformaEducativa(nom, cursosComp) {
        this.ventaTotal = 0;
        this.nombre = nom;
        this.cursosComprados = cursosComp;
    }
    PlataformaEducativa.prototype.registrarVenta = function (compraCurso) {
        this.cursosComprados.push(compraCurso);
    };
    PlataformaEducativa.prototype.ingresosVenta = function () {
        for (var i = 0; i < this.cursosComprados.length; i++) {
            this.ventaTotal += this.cursosComprados[i].getCurso().getPrecio();
        }
        return this.ventaTotal;
    };
    return PlataformaEducativa;
}());
exports.PlataformaEducativa = PlataformaEducativa;
