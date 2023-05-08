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

export default obtenerUsuario;
