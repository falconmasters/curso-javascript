'use strict';

// Forma 1 - Palabra export
// export const nombre = 'Carlos';

// export const obtenerPosts = () => {
// 	return ['Post1', 'Post2', 'Post3'];
// };

// Forma 2 - Final del documento
const nombre = 'Carlos';

const obtenerPosts = () => {
	return ['Post1', 'Post2', 'Post3'];
};

// Forma 1 - mediante palabras export default
// export default () => {
// 	return {
// 		nombre: 'Carlos',
// 		correo: 'correo@correo.com',
// 	};
// };

// Forma 2 - Final del documento
const obtenerUsuario = () => {
	return {
		nombre: 'Carlos',
		correo: 'correo@correo.com',
	};
};

console.log('Soy codigo que se ejecuta desde el archivo emptyExport.js');

const correo = 'correo@correo.com';

/* 
	📌 Named Imports
*/
console.log('Mi nombre es ' + nombre);
console.log(obtenerPosts());
console.log(nombre);
console.log(obtenerPosts());
console.log(obtenerUsuario());
console.log(correo);
