/**
Dado un arreglo de 20 valores enteros. se desea conocer(realizarlo con funciones):
a) la cantidad de valores negativos
b) la cantidad de valores positivos
c) la cantidad de multiplos de 15
d) el valor acumulado(sumatoria) de los numeros que son pares
ejempo: [3,5,-7,-10,30,5,67,80,20,60,45,25,12,68,39,-67,90,-23,60,-56]
 */
var lista=[3,5,-7,-10,30,5,67,80,20,60,45,25,12,68,39,-67,90,-23,60,-56];

function  verificar(listaN){
    var positivos=0, negativos=0, mult15=0, sumaP=0;

    for(var i=0; i<listaN.length;i++){
        if(listaN[i]>=0){
            positivos++;
        }else{
            negativos++;
        }

        if(listaN[i]%15==0){
            mult15++;
        }

        if(listaN[i]%2==0){
            sumaP=sumaP+listaN[i];
        }
    }

    console.log('cantidad de positivos: '+ positivos+ '\ncantidad de negativos: '+ negativos+ '\ncantidad multiplos: '+ mult15+ '\nsuma pares: '+ sumaP)
}


verificar(lista)