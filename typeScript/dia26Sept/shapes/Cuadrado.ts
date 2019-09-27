import { FiguraGeometrica } from "./FiguraGeometrica";

export class Cuadrado extends FiguraGeometrica {
    private _lado: number;

    public constructor(px:number,py:number,l:number){
        super(px,py);
        this._lado=l;
    }
    public getLado(): number {
        return this._lado;
    }
    public setLado(value: number) {
        this._lado = value;
    }

    public area():number{
        return (this._lado*this._lado);
    }

    public perimetro():number{
        return (4*this._lado);
    }
}

let cuadrado:Cuadrado=new Cuadrado(5,5,20);


console.log(`Cuadrado: 
posicion en x: ${cuadrado.getPosX()}
posicion en y: ${cuadrado.getPosY()}
lado:        ${cuadrado.getLado()}
area:          ${cuadrado.area()}
perimetro:     ${cuadrado.perimetro()}` 
            );