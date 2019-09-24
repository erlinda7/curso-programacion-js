"use strict";
/**
 * // TAREA: HACER UNA CLASE QUE SE LLAME "Auto"
 * el cual reciba como parametros (ruedas, color, puertas, marca, modelo)
 */
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(ruedas, color, puertas, marca, modelo) {
        this.ruedas = ruedas;
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
        this.modelo = modelo;
    }
    Auto.prototype.mostrarDetalles = function () {
        return "\n        Ruedas:   " + this.ruedas + "\n        Color:    " + this.color + "\n        Puertas:  " + this.puertas + "\n        Marca:    " + this.marca + "\n        Modelo:   " + this.modelo;
    };
    return Auto;
}());
exports.Auto = Auto;
var auto = new Auto(4, 'Blanco', 5, 'Ferrari', 'F12berlinetta');
console.log(auto.mostrarDetalles());
