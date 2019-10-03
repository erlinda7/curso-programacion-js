import { FiguraGeometrica } from "./FiguraGeometrica";

export class Cuadrado extends FiguraGeometrica {
    private _lado: number;

    public constructor(nombre:string,px:number,py:number,l:number){
        super(nombre,px,py);
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


