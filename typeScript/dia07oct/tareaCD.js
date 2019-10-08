"use strict";
exports.__esModule = true;
var Cancion = /** @class */ (function () {
    //nombre, cancion, genero ,autor
    function Cancion(nombre, genero, autor) {
        this.nombre = nombre;
        this.genero = genero;
        this.autor = autor;
    }
    Cancion.prototype.getNombre = function () {
        return this.nombre;
    };
    Cancion.prototype.getGenero = function () {
        return this.genero;
    };
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Cancion.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    return Cancion;
}());
exports.Cancion = Cancion;
var CD = /** @class */ (function () {
    function CD() {
        this.listaCanciones = [];
        this.contador = 0;
    }
    //devuelve el valor del contador de canciones
    CD.prototype.numeroCanciones = function () {
        return this.contador;
    };
    //devuelve la cancion que se encuentra en la posicion indicada
    CD.prototype.dameCancion = function (posicion) {
        var cancion = null;
        for (var pos = 0; pos < this.listaCanciones.length; pos++) {
            if (pos == posicion) {
                cancion = this.listaCanciones[pos];
            }
        }
        return cancion;
    };
    //cambia la cancion de la posicion indicada por la nueva cancion proporcionada
    CD.prototype.grabaCancion = function (posicion, cancion) {
        for (var pos = 0; pos < this.listaCanciones.length; pos++) {
            if (pos == posicion) {
                this.listaCanciones[pos] = cancion;
            }
        }
    };
    //agrega al final del array la cancion proporcionada
    CD.prototype.agrega = function (cancion) {
        this.listaCanciones.push(cancion);
        this.contador++;
    };
    //elimina la cancion que se encuentra en la posicion indicada
    CD.prototype.elimina = function (posicion) {
        for (var pos = 0; pos < this.listaCanciones.length; pos++) {
            if (pos == posicion) {
                this.listaCanciones.splice(pos, 1);
                this.contador--;
            }
        }
    };
    return CD;
}());
exports.CD = CD;
var cancion1 = new Cancion('Amigo', 'Alternativa', 'Juan Carlos Alvarado');
var cancion2 = new Cancion('Incomparable', 'contemporanea', 'LA IBI');
var cancion3 = new Cancion('Alli quiero estar', 'Alternativa', 'Barak');
var cancion4 = new Cancion('Aqui estoy', 'contemporanea', 'Hillsong');
var cancion5 = new Cancion('Como mirarte', 'Alternativa', 'Sebastian Yatra');
var cancion6 = new Cancion('Construire mi vida', 'Alternativa', 'Evan Craf');
var cd = new CD();
cd.agrega(cancion1);
cd.agrega(cancion2);
cd.agrega(cancion3);
cd.agrega(cancion4);
cd.agrega(cancion5);
cd.agrega(cancion6);
console.log("lista de canciones");
console.log(cd);
console.log("eliminando Evan craf");
cd.elimina(5);
console.log(cd);
console.log("mostrando cancion");
console.log(cd.dameCancion(1));
console.log("\ncambiando cancion tercer cielo");
var cancion7 = new Cancion('Creere', 'Alternativa', 'Tercer Cielo');
cd.grabaCancion(0, cancion7);
console.log(cd);
