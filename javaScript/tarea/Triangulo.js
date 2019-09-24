/**
 * Dado los lados A, B, C de un triangulo diga si es escaleno, equilatero, isosceles
 * equilatero 3 lados iguales
 * isosceles 2 lados iguales
 * escaleno diferentes
 */
var ladoA=7;
var ladoB=7;
var ladoC=7;

if (ladoA === ladoB && ladoB === ladoC){
    console.log("es un triangulo equilatero");
}else{
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        console.log("es un triangulo isosceles");
    }else {
        console.log("es un triangulo escaleno");
        
    }
}