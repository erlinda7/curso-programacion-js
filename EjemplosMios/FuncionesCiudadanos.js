const c=console.log; //no debe poner parentesis

const multiplicar = (a,b) => a * b;

c(multiplicar(3,4));



//////////////////////
const con= console.log;

function sumar(x){
    return function(y){
        return x+y;
    }
}

//closures
con('\nfuncion que llama a funcion ');
con(sumar(5)(2));



const sumando = x => y => x+y;

con('suamndo  '+ sumando(40)(20));