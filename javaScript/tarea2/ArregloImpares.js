/**
 * Escribir un programa que llene un arreglo 
 * con los 20 primeros numeros impares 
 * y calcule su sumatoria
 */

 var cantidad=0;
 var num=0
 var arreglo=[];
 var suma=0;

while(cantidad<20){
    if(num%2!==0){
        arreglo.push(num);
        num++;
        cantidad++;
    }
    num++;
}

 for(var i=0; i<arreglo.length;i++){
     suma=suma+arreglo[i];
     
 }

 console.log(arreglo);
 console.log('\nSumatoria impares: '+suma);