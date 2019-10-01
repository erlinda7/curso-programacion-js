"use strict";
exports.__esModule = true;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(c, e, fe) {
        this.curso = c;
        this.estudiante = e;
        this.fecha = fe;
    }
    CompraCurso.prototype.getCurso = function () {
        return this.curso;
    };
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
