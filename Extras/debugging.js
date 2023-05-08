const usuario = {
	nombre: '',
	edad: 0,
	acceso_permitido: true,
};

// Registramos los datos del usuario
document.getElementById('boton1').addEventListener('click', () => {
	usuario.nombre = prompt('Ingresa tu nombre');

	/*
		📌 Mediante consola
	*/
	// console.log(usuario);

	/*
		📌 Mediante palabra debugger
	*/
	// debugger;

	/*
		📌 Mediante breakpoint
	*/

	usuario.edad = prompt('Ingresa tu edad');

	if (usuario.edad >= 18) {
		usuario.acceso_permitido = true;
	} else {
		usuario.acceso_permitido = false;
	}
});
