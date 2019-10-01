import { CompraCurso } from "./CompraCurso";

export class PlataformaEducativa{
    nombre:string;
    cursosComprados: CompraCurso[];
    ventaTotal:number=0;

    constructor(nom:string, cursosComp:CompraCurso[]){
        this.nombre=nom;
        this.cursosComprados=cursosComp;
    }


    public registrarVenta(compraCurso: CompraCurso){
        this.cursosComprados.push(compraCurso);
    }

    public ingresosVenta():number{
        for(let i=0; i<this.cursosComprados.length;i++){
            this.ventaTotal+=this.cursosComprados[i].getCurso().getPrecio();
        }
      return this.ventaTotal;
    }
}