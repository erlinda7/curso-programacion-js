import { Curso } from "./Curso";
import { Estudiante } from "./Estudiante";

export class CompraCurso{
    private curso: Curso;
    private estudiante: Estudiante;
    private fecha: string;

    constructor(c:Curso, e:Estudiante, fe:string){
        this.curso=c;
        this.estudiante=e;
        this.fecha=fe;
    }
}