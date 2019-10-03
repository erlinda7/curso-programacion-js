import { FiguraGeometrica } from "./FiguraGeometrica";

export class Triangulo extends FiguraGeometrica{
    private _base: number;
    private _altura: number;

    public constructor(nombre:string,px:number, py:number, h:number, b:number){
        super(nombre,px,py);
        this._altura=h;
        this._base=b;
    }

    public getBase(): number {
        return this._base;
    }
    public setBase(value: number) {
        this._base = value;
    }
    public getAltura(): number {
        return this._altura;
    }
    public setAltura(value: number) {
        this._altura = value;
    }
    public area():number{
        let area=(this._base*this._altura)/2;
        return (area);
    }
    public perimetro():number{
        return 0;
    }

}


