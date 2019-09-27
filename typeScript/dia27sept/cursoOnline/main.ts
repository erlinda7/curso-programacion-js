

/**
 * Se necesita resolver el siguiente problema usando programacion orientada a objetos.
 * Se desea realizar un sistema de ventas de cursos online como por ejemplo Udemy, platzi,etc
 * PAra ello se necesita interactuar con estudiantes,
 * profesores de los mismos se necesita registrar su inforamcion basica como nombre, apellido,correo, direccion;
 * por otra parte swe necesita interactuar con con los cursosque se impartiran de los mismos se necesita
 * guardar su precio, nombre, descripcion; finalmente se desea guardar el registro de los estudiantes 
 * que compraron algun curso. Un estudiante o profesor puede tener una o mas direcciones, al mismo tiempo 
 * una direccion esta compuesta por la siguiente informacion: ciudad, barrio, calle, 
 * Para los profesores en particular se necesita guardar su profesion
 */


import { Docente } from "./Docente";
import { Direccion } from "./Direccion";
import { Estudiante } from "../Estudiante";
import { Curso } from "./Curso";
import { CompraCurso } from "./CompraCurso";

 //docente
 let dir1Docente:Direccion=new Direccion('Cochabamba' ,'Calama','heroinas');
 let dir2Docente:Direccion=new Direccion('Cochabamba' ,'villa pagador','25 de mayo');
 let direccionD:Direccion[]= [dir1Docente,dir2Docente];

 let docente:Docente=new Docente('Angel','Antezana','anghel@gamil.com',direccionD,'Ingeniero');
 console.log('\n\nDocente:')
 console.log(docente);



//estudiante
let dirEst:Direccion=new Direccion('Oruro' ,'Pandoja','23 de marzo');
let dirE:Direccion[]=[dirEst];
let estudiante1:Estudiante=new Estudiante('Norma','Apellido','ddd@gamil.com',dirE);
console.log('\n\nEstudiante')
console.log(estudiante1);


//curso
let curso1:Curso=new Curso('Java','50$','Programacion avanzada de java',docente);
console.log('\n\nCurso')
console.log(curso1);

//compracurso
let compraCurso:CompraCurso= new CompraCurso(curso1,estudiante1,'34-09-19');
console.log('\n\nCompra curso')
console.log(compraCurso);



