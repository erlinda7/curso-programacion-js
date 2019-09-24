/*
Escribir una funcion que reciba como parametros una coordenada (x,y), 
la funcion debe decirme en que cuadrante esta coordenada.
Ejem: (2,3) // esta en el cuadrante I
*/

function verificarCoordenada(x,y){
    if(x>0 && y>0){
        return 'Esta en el cuadrante I'
    }else if(x<0 && y>0){
        return 'Esta en el cuadrante II'
    }else if(x<0 && y<0){
        return 'Esta en el cuadrante III'
    }else if(x>0 && y<0){
        return 'Esta en el cuadrante IV'
    }else if(x==0 && y==0){
                return 'Se encuentra en el origen'
          }else if(x==0){
                 return 'Se encuentra sobre el eje Y'
          }else if(y==0){
                return 'Se encuentra sobre el eje X'
         }
}

console.log(verificarCoordenada(4,5));
console.log(verificarCoordenada(-6,9));
console.log(verificarCoordenada(-3,-8));
console.log(verificarCoordenada(7,-5));

console.log(verificarCoordenada(0,5));
console.log(verificarCoordenada(4,0));
console.log(verificarCoordenada(0,0));