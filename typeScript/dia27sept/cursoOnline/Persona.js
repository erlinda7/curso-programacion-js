"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nom, apell, email, direcc) {
        this.nombre = nom;
        this.apellido = apell;
        this.correo = email;
        this.direccion = [direcc];
    }
    Persona.prototype.agregarDireccion = function (dir) {
        this.direccion.push(dir);
    };
    return Persona;
}());
exports.Persona = Persona;
