import { FiguraGeometrica } from "./FiguraGeometrica";

export class Trapezoide extends FiguraGeometrica{
    private _ladoCorto: number;
    private _ladoLargo: number;
    private _altura: number;

    public constructor(px:number, py:number, lc:number, lL:number, h:number){
        super(px,py);
        this._ladoCorto=lc;
        this._ladoLargo=lL;
        this._altura=h;
    }

    public getLadoCorto(): number {
        return this._ladoCorto;
    }
    public setLadoCorto(value: number) {
        this._ladoCorto = value;
    }
    public getLadoLargo(): number {
        return this._ladoLargo;
    }
    public setLadoLargo(value: number) {
        this._ladoLargo = value;
    }
    public getAltura(): number {
        return this._altura;
    }
    public setAltura(value: number) {
        this._altura = value;
    }


    public area():number{
        let area=((this._ladoCorto+ this._ladoLargo)/2)*this._altura;
        return area;
    }

    public perimetro():number{
        return 0;
    }
}

let trapezoide:Trapezoide=new Trapezoide(40,40, 20,50,10);

console.log(`Trapezoide: 
posicion en x: ${trapezoide.getPosX()}
posicion en y: ${trapezoide.getPosY()}
lado corto:    ${trapezoide.getLadoCorto()}
lado largo:    ${trapezoide.getLadoLargo()}
altura:        ${trapezoide.getAltura()}
area:          ${trapezoide.area()}
perimetro:     ${trapezoide.perimetro()}` 
            );