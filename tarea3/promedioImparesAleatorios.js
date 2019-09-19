/**
 * RETO:
 * LLenar un arreglo con 20 numeros aleatorios
 * usando el ciclo while y la libreria Math(Math.random)
 * y calcular el promedio de los numeros impares.
 */

 
function promedioimparesaleatorios(){
    var numeros=[];
     var cont=0;
     var contImpar=0;
     var suma=0;
     while(cont<20){
         numeros[cont]=parseInt(Math.random()*100);
         if(numeros[cont]%2!==0){
            suma=suma+numeros[cont];
            contImpar++;
         }
         cont++;
     }
     var prom=suma/contImpar;

     console.log(numeros);
     console.log('Promedio:  '+ prom);
 }

promedioimparesaleatorios();