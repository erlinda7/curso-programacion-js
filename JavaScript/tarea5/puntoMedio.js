var p1=[2,2];
var p2=[6,3];

function calcularPuntoMedio(punto1, punto2){
        var puntoMedio=[];
        var xpm=(punto2[0] + punto1[0])/2;
        var ypm=(punto2[1] + punto1[1])/2;
        puntoMedio.push(xpm,ypm);

        return puntoMedio;
}

console.log('punto1: ('+ p1 +')');
console.log('punto2: ('+ p2 +')');
console.log('PuntoMedio: (' + calcularPuntoMedio(p1,p2)+')');