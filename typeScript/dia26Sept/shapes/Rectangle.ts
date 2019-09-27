import { FiguraGeometrica } from "./FiguraGeometrica";

export class Rectangle extends FiguraGeometrica{
    private heigth: number;
    private width: number;


    public constructor(px:number, py:number, h:number, w:number){
        super(px,py);
        this.heigth=h;
        this.width=w;
    }

    public getHeigth(): number {
        return this.heigth;
    }
    public setHeigth(h: number):void {
        this.heigth = h;
    }
    public getWidth(): number {
        return this.width;
    }
    public setWidth(w: number):void {
        this.width = w;
    }

    public area():number{
        let area=this.heigth*this.width;
        return area;
    }

    public perimetro():number{
        let per=2*(this.heigth+this.width);
        return per;
    }
}

/*
let rectangle:Rectangle=new Rectangle(4,9,67,89);

console.log(`Rectangulo: 
posicion en x: ${rectangle.getPosX()}
posicion en y: ${rectangle.getPosY()}
altura:        ${rectangle.getHeigth()}
ancho:         ${rectangle.getWidth()} 
area:          ${rectangle.area()}
perimetro:     ${rectangle.perimetro()}` 
            );
            */