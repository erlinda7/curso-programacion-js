

process.stdout.write("Ingrese un numero:  \n");
var num=0;
process.stdin.on('data',function(numero){
   //var num= process.stdout.write(numero);
    num= numero;
 
   process.exit();
})

//console.log(num);

//process.stdout.write("Hola mundo \n");