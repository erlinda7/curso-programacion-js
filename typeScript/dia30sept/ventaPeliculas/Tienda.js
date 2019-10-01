"use strict";
exports.__esModule = true;
var Cd_1 = require("./Cd");
var Dvd_1 = require("./Dvd");
var Bluray_1 = require("./Bluray");
var Tienda = /** @class */ (function () {
    function Tienda(nombreT) {
        this.discosVendidos = [];
        this.discosDisponibles = [];
        this.totalCD = 0;
        this.totalDvd = 0;
        this.totalBluray = 0;
        this.totalVentas = 0;
        this.nombreTienda = nombreT;
    }
    Tienda.prototype.vender = function (ventaD, cant) {
        this.discosVendidos.push(ventaD);
        var pre = cant * ventaD.getDisco().getPrecio();
        ventaD.getDisco().setStock(cant);
        if (ventaD.getDisco() instanceof Cd_1.Cd) {
            this.totalCD += pre;
        }
        else if (ventaD.getDisco() instanceof Dvd_1.Dvd) {
            this.totalDvd += pre;
        }
        else if (ventaD.getDisco() instanceof Bluray_1.Bluray) {
            this.totalBluray += pre;
        }
        this.totalVentas = this.totalCD + this.totalDvd + this.totalBluray;
    };
    Tienda.prototype.ventaCd = function () {
        return this.totalCD;
    };
    Tienda.prototype.ventaDvd = function () {
        return this.totalDvd;
    };
    Tienda.prototype.ventaBluray = function () {
        return this.totalBluray;
    };
    Tienda.prototype.ventaTotal = function () {
        return this.totalVentas;
    };
    Tienda.prototype.peliculasVendidas = function () {
        return this.discosVendidos;
    };
    Tienda.prototype.registrarPeliculas = function (pelicula) {
        this.discosDisponibles.push(pelicula);
    };
    Tienda.prototype.peliculasDiponibles = function () {
        return this.discosDisponibles;
    };
    return Tienda;
}());
exports.Tienda = Tienda;
/**tiene ventaDiscos, nombreTienda, y metodo vender */ 
