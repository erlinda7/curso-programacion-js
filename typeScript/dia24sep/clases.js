var Animal = /** @class */ (function () {
    function Animal(name, color) {
        //console.log(name,color);
        this.name = name;
        this.color = color;
    }
    Animal.prototype.mostrarColor = function () {
        console.log(this.color);
    };
    Animal.prototype.caminar = function () {
        console.log('Esta caminando');
    };
    return Animal;
}());
var perro = new Animal('firulas', 'negro');
perro.mostrarColor();
perro.caminar();
console.log(perro.name + ' ' + perro.color);
