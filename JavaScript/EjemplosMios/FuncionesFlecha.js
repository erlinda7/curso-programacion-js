function saludar(persona){
    return `Hola ${persona}`;
}

console.log(saludar('Beto'));




//funcion de flecha
const sumarF= (a,b) => a+b;

function sumar(a,b){
    return a+b;
}

console.log("suma flecha: " +sumarF(40,60));
console.log("suma funcion: "+ sumar(40,89));



////////////////////////////  estudiar funciones flecha
/*
console.log("\nsaludo\n")


const saludar =(persona, sexo='m') =>{
    var saludo=sexo=== 'm'
              ? 'Bienvenido'
              :  'Bienvenida'
    return `${saludo} a Academy, ${persona}` ;
}

console.log(saludar('Adrian'));
console.log(saludar('Alexys'));
console.log(saludar('Juan Carlos'));
console.log(saludar('Maria', 'f'));

*/