const crearCookie = () => {
	// document.cookie = 'nombre=Carlos';
	document.cookie = 'nombre=Carlos; expires=1 Jan 2023 01:00:00 UTC';
};

const iniciarSesion = () => {
	const usuario = prompt('Usuario:');
	document.cookie = `nombre=${usuario}; expires=1 Jan 2023 01:00:00 UTC`;
	alert('Sesión Iniciada');
};

// console.log(document.cookie);

/*
	Forma para obtener el usuario de las cookies.
*/
let usuario;

const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
	const propiedad = cookie.split('=')[0];
	if (propiedad === 'nombre') {
		usuario = cookie.split('=')[1];
	}
});

if (usuario) {
	console.log('Hola ' + usuario);
} else {
	console.log('Por favor inicia sesión');
}

const cerrarSesion = () => {
	document.cookie = 'nombre=; expires=1 Jan 2020 01:00:00 UTC';
	console.log('Hasta luego!');
};
