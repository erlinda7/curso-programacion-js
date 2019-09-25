interface Figura{
    color:string;
    dibujar():void;
}

interface Linea{
    grosor: number;
}

interface Cuadrado extends Figura, Linea{
    lado: number;
}