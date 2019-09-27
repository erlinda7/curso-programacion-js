import { Rectangle } from "./Rectangle";

export class Paralelogramo extends Rectangle{
    public constructor(px:number,py:number,h:number, w:number){
        super(px,py,h,w);
    }
}

let parelogramo:Paralelogramo=new Paralelogramo(10,10,30,20);

console.log(`Paralelogramo: 
posicion en x: ${parelogramo.getPosX()}
posicion en y: ${parelogramo.getPosY()}
altura:        ${parelogramo.getHeigth()}
ancho:         ${parelogramo.getWidth()} 
area:          ${parelogramo.area()}
perimetro:     ${parelogramo.perimetro()}` 
            );