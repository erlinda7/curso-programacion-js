/**
 * una funcion tiene un nombre
 * parametros de entrada (>=0) -> datos para la funcion
 * cuerpo de la funcion
 * para de retorno (1 ó 0)
 */

 
 function esimpar(numero){
     var resultado =false;
     if(numero%2!=0){
         resultado=true;
     }else{
         resultado=false;
     }
     return true;
 }

 console.log(esimpar(7));


 /**
  * para exportar 
  * se puede importar funciones  esimpar  sin parentesis
  * tambien variables
  */
  var impar=45;

  module.exports={
      esimpar:esimpar,
      impar:impar
  };
 