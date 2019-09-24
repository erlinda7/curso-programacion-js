/**
dado tres notas de un alumno, 
si el promedio es mayor o igual a 7
mostrar el mensaje 'promocionado'. 
Tener en cuenta que para obtener 
el promedio debemos operar suma=nota1 +nota2 +nota3; y luego hacer 
promedio=suma/3;
1-10
 */
function promedio(nota1, nota2, nota3){
    if(nota1>=0 && nota1<=10 && nota2>=0 && nota2<=10 && nota3>=0 && nota3<=10){
        var suma=nota1+nota2+nota3;

        if((suma/3)>=7){
            return 'promocionado'
        }else{
            return 'Reprobado'
        }

    }else{
        return 'nota no valida'
    }
    

}

console.log(promedio(-2,7,9));