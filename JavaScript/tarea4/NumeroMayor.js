/**
 * 
dado un arreglo de numeros, ejemplo:
[3,6,3,8,4,7,22,86,2,1,6,7,55,99,30,10]
encontrar o imprimir el numero mayor de los elementos del arreglo
 */

 function numeroMayor(){
     var arreglo=numerosAleatorios(20,5,100);
     var mayor=arreglo[0];
     for(var i=1; i<arreglo.length;i++){
         if(mayor<arreglo[i]){
            mayor=arreglo[i];
         }
     }
     console.log(arreglo);
     console.log('El mayor es :' + mayor);
 }


 function numerosAleatorios(cant, min, max){
    var list=[];
    for(var i=0; i<cant; i++){
        list[i]=parseInt(Math.random() *(max-min)+1);
    }
    return list;
}

numeroMayor();