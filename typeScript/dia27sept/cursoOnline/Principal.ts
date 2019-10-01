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


import { Direccion } from  "./Direccion";
import { Docente } from  "./Docente";
import { Estudiante } from  "./Estudiante";
import { Curso } from  "./Curso";
import { CompraCurso } from  "./CompraCurso";
import { PlataformaEducativa } from "./PlataformaEducativa";


//docente
let dir1Docente:Direccion=new Direccion('Cochabamba' ,'Calama','heroinas');
let dir2Docente:Direccion=new Direccion('La Paz' ,'villa pagador','25 de mayo');
let dir3Docente:Direccion=new Direccion('Beni' ,'senda 10','desconocido');


let docente:Docente=new Docente('Angel','apellido','@gamil.com',dir1Docente,'inge');

console.log('\n\nDocente:')
docente.agregarDireccion(dir3Docente);

///
console.log(docente);



//estudiante
let dirEst:Direccion=new Direccion('Oruro' ,'Pandoja','23 de marzo');
let estudiante1:Estudiante=new Estudiante('Norma','Apellido','ddd@gamil.com',dirEst);
console.log('\n\nEstudiante')
console.log(estudiante1);


//curso
let curso1:Curso=new Curso('Java',50,'Programacion avanzada de java',docente);
let curso2:Curso=new Curso('Python',100,'introduccion a python',docente);
console.log('\n\nCurso')
console.log(curso1);

//compracurso
let compraCurso:CompraCurso= new CompraCurso(curso1,estudiante1,'34-09-19');
let compraCurso1:CompraCurso=new CompraCurso(curso2,estudiante1,'23-07-19')
console.log('\n\nCompra curso')
console.log(compraCurso);

//plataforma educativa
let plataforma:PlataformaEducativa=new PlataformaEducativa('EdTeam',[]);
plataforma.registrarVenta(compraCurso);
plataforma.registrarVenta(compraCurso1);
console.log('ingresos por ventas: ' + plataforma.ingresosVenta());
