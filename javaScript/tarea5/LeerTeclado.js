const readline =require('readline');

const read=readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

var pregunta='Ingrese un nombre';

read.question(pregunta, (respuesta)=>{
    console.log('Bienvenido  : ' + respuesta);
    nombre=respuesta;
    read.close();
});

