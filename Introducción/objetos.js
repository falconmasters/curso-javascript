const personaArreglo = ['Carlos', 27, 'correo@correo.com', true, true];

const persona = {
	nombre: 'Carlos',
	edad: 27,
	correo: 'correo@correo.com',
	suscripciones: {
		web: true,
		correo: true,
	},
	coloresFavoritos: ['Negro', 'Rojo'],
	saludo: function () {
		alert('Hola!');
	},
};

// console.log(persona.nombre);
// console.log(persona['edad']);

const variable = 'suscripciones';
// console.log(persona[variable]);

persona.pais = 'Mexico';
persona.pais = 'España';

console.log(persona);
persona.saludo();
