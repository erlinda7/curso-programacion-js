function invertirNumero(numero){
    console.log('numero: ' +numero)
    var invertido=0;
    while(numero>0){
        
        invertido=(invertido*10)+ (numero%10)
        numero=parseInt(numero/10);
        
    }

    console.log('invertido: '+invertido);
}

invertirNumero(12365789);