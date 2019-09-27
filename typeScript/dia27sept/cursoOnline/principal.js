"use strict";
exports.__esModule = true;
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
var Docente_1 = require("./Docente");
var Direccion_1 = require("./Direccion");
var Estudiante_1 = require("./Estudiante");
var Curso_1 = require("./Curso");
var CompraCurso_1 = require("./CompraCurso");
//docente
var dir1Docente = new Direccion_1.Direccion('Cochabamba', 'Calama', 'heroinas');
var dir2Docente = new Direccion_1.Direccion('Cochabamba', 'villa pagador', '25 de mayo');
var direccionD = [dir1Docente, dir2Docente];
var docente = new Docente_1.Docente('Angel', 'Antezana', 'anghel@gamil.com', direccionD, 'Ingeniero');
console.log('\n\nDocente:');
console.log(docente);
//estudiante
var dirEst = new Direccion_1.Direccion('Oruro', 'Pandoja', '23 de marzo');
var dirE = [dirEst];
var estudiante1 = new Estudiante_1.Estudiante('Norma', 'Apellido', 'ddd@gamil.com', dirE);
console.log('\n\nEstudiante');
console.log(estudiante1);
//curso
var curso1 = new Curso_1.Curso('Java', '50$', 'Programacion avanzada de java', docente);
console.log('\n\nCurso');
console.log(curso1);
//compracurso
var compraCurso = new CompraCurso_1.CompraCurso(curso1, estudiante1, '34-09-19');
console.log('\n\nCompra curso');
console.log(compraCurso);
