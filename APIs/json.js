/*
	📌 JSON
	Javascript Object Notation
*/

/*
	📌 Tipos de datos que podemos usar en JSON:
	- cadena de texto
	- numeros
	- objetos (en formato JSON)
	- arreglos
	- booleanos
	- null

	Tipos de datos que NO podemos usar en JSON:
    - funciones
    - objetos de fecha
    - undefined
*/

// datos.json
const datos = `
	{
		"id": 1,
		"nombre": "Carlos Arturo",
		"suscriptor_activo": true,
		"posts": [
			{
				"id": 1,
				"titulo": "Titulo del primer post",
				"texto": "texto del primer post ..."
			},
			{
				"id": 2,
				"titulo": "Titulo del segundo post",
				"texto": "texto del segundo post ..."
			}
		]
	}
`;

/*
	📌 parse()
	Le pasamos una cadena de texto con formato JSON y nos devuelve objeto de javascript.
*/
const objeto = JSON.parse(datos);
// console.log(objeto.nombre);

/*
	📌 stringify()
	Nos permite pasarle un objeto de javascript y nos devuelve una cadena de texto con objeto en formato JSON
*/
const usuario = {
	nombre: 'Carlos',
	correo: 'correo@correo.com',
	coloresFavoritos: ['azul', 'rojo', 'negro'],
};

console.log(JSON.stringify(usuario));
