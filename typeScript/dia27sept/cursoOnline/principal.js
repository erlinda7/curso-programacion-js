"use strict";
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
exports.__esModule = true;
var Direccion_1 = require("./Direccion");
var Docente_1 = require("./Docente");
var Estudiante_1 = require("./Estudiante");
var Curso_1 = require("./Curso");
var CompraCurso_1 = require("./CompraCurso");
var PlataformaEducativa_1 = require("./PlataformaEducativa");
//docente
var dir1Docente = new Direccion_1.Direccion('Cochabamba', 'Calama', 'heroinas');
var dir2Docente = new Direccion_1.Direccion('La Paz', 'villa pagador', '25 de mayo');
var dir3Docente = new Direccion_1.Direccion('Beni', 'senda 10', 'desconocido');
var docente = new Docente_1.Docente('Angel', 'apellido', '@gamil.com', dir1Docente, 'inge');
console.log('\n\nDocente:');
docente.agregarDireccion(dir3Docente);
///
console.log(docente);
//estudiante
var dirEst = new Direccion_1.Direccion('Oruro', 'Pandoja', '23 de marzo');
var estudiante1 = new Estudiante_1.Estudiante('Norma', 'Apellido', 'ddd@gamil.com', dirEst);
console.log('\n\nEstudiante');
console.log(estudiante1);
//curso
var curso1 = new Curso_1.Curso('Java', 50, 'Programacion avanzada de java', docente);
var curso2 = new Curso_1.Curso('Python', 100, 'introduccion a python', docente);
console.log('\n\nCurso');
console.log(curso1);
//compracurso
var compraCurso = new CompraCurso_1.CompraCurso(curso1, estudiante1, '34-09-19');
var compraCurso1 = new CompraCurso_1.CompraCurso(curso2, estudiante1, '23-07-19');
console.log('\n\nCompra curso');
console.log(compraCurso);
//plataforma educativa
var plataforma = new PlataformaEducativa_1.PlataformaEducativa('EdTeam', []);
plataforma.registrarVenta(compraCurso);
plataforma.registrarVenta(compraCurso1);
console.log('ingresos por ventas' + plataforma.ingresosVenta());
