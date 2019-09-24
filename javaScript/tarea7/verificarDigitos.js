/**
realizar una funcion, dado un numero de 10 digitos:
mostrar la cantidad de numeros pares, impares, primos, multiplos de 3
num=1234567890
 */

 function verificar(numero){
     var cantPares=0, cantImpares=0, cantPrimos=0, cantMult3=0;

     while(numero>0){
        var mod=numero%10;

        if(mod%2==0){
            cantPares++;
        }else{
            cantImpares++;
        }

        if(mod%3==0 && mod>0){
            cantMult3++;
        }

        if(esPrimo(mod)==2){
            cantPrimos++;
        }
        numero=parseInt(numero/10);
     }
     console.log('cantidad de pares: '+ cantPares);
     console.log('cantidad de impares: '+ cantImpares);
     console.log('cantidad de primos: '+ cantPrimos);
     console.log('cantidad de multiplos de tres: '+ cantMult3);
 }

 function esPrimo(digito){
     var cont=0;
     for(var i=1; i<=digito; i++){
         if(digito%i==0){
            cont++;
         }
     }
     return cont;
 }


 verificar(1234567890)