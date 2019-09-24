/**
 * recibir un numero que inicia con 9 y termina con 9, 
 * tal que sus digitos intermedios son 0, 1,2 ,o 3 
 * por medio del cual se representa un mensaje encriptado,
 * tal que retorne una tira con el mensaje correspondiente,
 * suponga que 0=maria, 1=no, 2 =esta, 3=feliz.
 * Por ejemplo para 90239 retorna "maria esta feliz", 
 * para 91109 retorna "no no maria"
 */



function empiezaNueve(numero){
    while(numero>0){
        var mod=numero%10;
        numero=parseInt(numero/10);
    }
    return (mod==9);
}

function terminaNueve(numero){
    var mod=numero%10;
    return (mod==9);
}

 function mostrarmensaje(numero){
    var mensaje=[];
     if(empiezaNueve(numero) && terminaNueve(numero)){
        while(numero>10){
            numero=parseInt(numero/10);
            mod=numero%10;
            if(mod==0){
                mensaje.push(' maria ') 
                //mensaje = 'maria'  + mensaje;
             }
             if(mod==1){
                mensaje.push(' no ')  
            }
            if(mod==2){
                mensaje.push(' esta ') 
             }
            if(mod==3){
                mensaje.push(' feliz ')  
            }            
        }
     }
     return mostrar(mensaje);
 }


function mostrar(lista){
    var mens='';
    for(var i=lista.length-1; i>=0; i--){
        mens=mens+' '+lista[i]+' ';
    }
    return mens
}

console.log(mostrarmensaje(90239));
console.log(mostrarmensaje(91109))
