function contarDig(numero){
    var cont=0;
    console.log('numero: ' +numero)
    while(numero>0){
        numero=parseInt(numero/10);
        cont++;
    }

    console.log(cont);
}

contarDig(12365789);