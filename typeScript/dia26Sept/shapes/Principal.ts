import { Triangulo } from "./Triangulo";
import { Rectangle } from "./Rectangle";
import { Cuadrado } from "./Cuadrado";
import { Circulo } from "./Circulo";

let triangulo:Triangulo=new Triangulo('triangulo',3,3,20,10);
console.log(triangulo);

let rectagulo:Rectangle=new Rectangle('rectangulo',4,5,20,30);
console.log(rectagulo);

let cuadrado:Cuadrado=new Cuadrado('Cuadrado', 4,4,20);
console.log(cuadrado);

let circulo:Circulo=new Circulo('circulo', 6,6,20);
console.log(circulo);



