var perro = {
    nombre: 'shado',
    edad: 3,
    color: 'negro',
    sexo: true,
    correr(){
        console.log(`${this.nombre}  corre`)  //bactigs para mostrar un valor dentro de una cadena     interpolar
    }
}

///mutabilidad 
// los objetos son mutables
//los objetos son asigandos por referencia y no por valor
//por referencia estan encadenados que si cambia uno cambia el otro
// los objetos se asignan por referencia
var otroPerro=perro;

otroPerro.patas=4;

console.log(perro);

///asignacion por valor  no estan encadenados
// los primitivos se asignan por valor
var b='Beto';
var c='Alexis';

c=b;  //c=beto

c='Alvaro';  //c=alvaro







//copiado de objetos
var perro3=Object.assign({},perro)   //{} objeto vacio o podias pasarle otro 
                                     // a partir del perro crea una copia
perro3.orejas='largas';

console.log(perro);
console.log(perro3);


//recorrer objetos
/* for in    Devuelve los nombres de las propiedades de un objeto
 pero devuelve tambien las propiedades en la cadena de prototipos
 */

 /**
  * For of no recorre un objeto porque un objeto no tiene indices..no es iterable
  * 
  */

  //Object.entries()
console.log('\n recorrer objetos\n')
 console.log(Object.entries(perro));  //devuelve como arrays cada una de las entradas del objeto

//Object.keys()    propiedades
console.log('\n recorrer objetos\n')
 console.log(Object.keys(perro));

//Object.values()   valores
console.log('\n recorrer objetos\n')
 console.log(Object.values(perro));