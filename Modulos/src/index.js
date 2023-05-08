/* 
	📌 Named Imports
*/
import { nombre as nombreImportado, obtenerPosts } from './namedExports';
console.log('Mi nombre es ' + nombreImportado);
console.log(obtenerPosts());

/* 
	📌 Namespace Imports
*/
import * as datos from './namedExports';
console.log(datos.nombre);
console.log(datos.obtenerPosts());

/* 
	📌 Default Imports
*/
import obtener from './defaultExport';
console.log(obtener());

/* 
	📌 Empty Imports
	Carga todo el codigo pero sin hacer ningun objeto.
*/
import './emptyExport';
import { correo } from './emptyExport';
console.log(correo);
