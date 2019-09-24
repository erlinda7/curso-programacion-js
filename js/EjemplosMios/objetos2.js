var perro = {
    nombre: 'shado',
    edad: 3,
    color: 'negro',
    sexo: true,
    correr(){
        console.log(`${this.nombre}  corre`)  //bactigs para mostrar un valor dentro de una cadena     interpolar
    }
}

for(var propiedad in perro){
    console.log(propiedad);
}

Object.prototype.patas=4;  //se lo agragamos a Object
console.log(perro.patas)

console.log('hereda de object sus propiedades con for in')
for(var propiedad in perro){  //hereda patas de object es peligroso

    console.log(propiedad);
}

console.log('solo sus propiedades de perro ')
for(var propiedad in perro){  //hereda patas de object es peligroso
    if(perro.hasOwnProperty(propiedad))
        console.log(propiedad);
}


