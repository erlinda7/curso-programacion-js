var perro = {
    nombre: 'shado',
    edad: 3,
    color: 'negro',
    sexo: true,
    correr(){
        console.log(`${this.nombre}  corre`)  //bactigs para mostrar un valor dentro de una cadena     interpolar
    }
}


console.log(perro);

perro.correr()


/////////////////////////////////atributo a traves de variables
var a='hola', b='mundo'

var saludo ={
    [a+b] : 'Holas como estan'
}
console.log(saludo)

////////////////////asignar una variable a otra como atributo
var miObjeto = {
    a:a,
    b:b

}
console.log(miObjeto);


///delete      borra una propiedad de un objeto 

delete perro.edad;
console.log(perro)

///añadir propiedad
perro.edad=3;

console.log(perro);

perro['orejas']=true

console.log(perro)


///prototipos
var amigo='carlos';
console.log(Object.getPrototypeOf(amigo));


/// Operador in y ciclo for in
