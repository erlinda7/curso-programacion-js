/*
elabore una funcion que permita contar la cantidad de veces que se repite una palabra en una lista
la funcion debe recibir 2 argumentos:
una lista de palabras
una palabra(la palabra que se desea cuantas veces se repite)
La funcion debe retornar un numero entero que es la cantidad de veces que se repite la palabra
Por ejemplo:
lista:[juan,pedro,auto,casa,silla,auto,autpo]
palabra:auto

Resultado esperado:
cantidad de repeticiones :2
*/

function contarRepetidos(lista, palabra){
    var cont=0;
    for(i=0; i<lista.length; i++){
        if(lista[i]==palabra){
            cont++;
        }
    }
    return cont;

}

var lista=['juan','pedro','auto','casa','silla','auto','auto'];
console.log(contarRepetidos(lista,'auto'));