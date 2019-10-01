import { Disco } from "./Disco";
import { VentaDisco } from "./VentaDisco";
import { Cd } from "./Cd";
import { Dvd } from "./Dvd";
import { Bluray } from "./Bluray";

export class Tienda{
    private nombreTienda:string;
    private discosVendidos:VentaDisco[]=[];
    private discosDisponibles:Disco[]=[];
    private totalCD:number=0;
    private totalDvd:number=0;
    private totalBluray:number=0;
    private totalVentas:number=0;
   
    constructor(nombreT:string) {
        this.nombreTienda=nombreT;
    }

    public vender(ventaD:VentaDisco, cant:number){
        this.discosVendidos.push(ventaD);
        let pre=cant*ventaD.getDisco().getPrecio();
        ventaD.getDisco().setStock(cant);
        if(ventaD.getDisco() instanceof Cd ){
            this.totalCD+=pre;
        }else if(ventaD.getDisco() instanceof Dvd){
            this.totalDvd+=pre;
        }else if(ventaD.getDisco() instanceof Bluray){
            this.totalBluray+=pre;
        }
        this.totalVentas=this.totalCD+ this.totalDvd + this.totalBluray;

    }

    public ventaCd(){
        return this.totalCD;
    }

    public ventaDvd(){
        return this.totalDvd;
    }

    public ventaBluray(){
        return this.totalBluray;
    }
    public ventaTotal(){
        return this.totalVentas;
    }

    public peliculasVendidas(){
        return this.discosVendidos;
    }


    public registrarPeliculas(pelicula:Disco){
        this.discosDisponibles.push(pelicula);
    }

    public peliculasDiponibles(){
        return this.discosDisponibles;
    }
}

/**tiene ventaDiscos, nombreTienda, y metodo vender */