/**
 * HAz una aplicacion que calcule el area de un circulo
 * (pi*r2). usa la constante de la libreria MAth
 */


function areaCirculo(radio){
    var res=Math.PI * Math.pow(radio,2);
    console.log(res);
}

areaCirculo(8);