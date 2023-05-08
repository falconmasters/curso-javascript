const endpoint = 'https://api.npoint.io/53cb575a789e51933e0b';

// fetch(endpoint)
// 	.then((respuesta) => {
// 		console.log('El servidor respondio');

// 		const promesa = respuesta.json();
// 		promesa
// 			.then((datos) => {
// 				console.log(datos);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

/*
	📌 Ejemplo con Async/Await
*/
const obtenerDatos = async () => {
	const respuesta = await fetch(endpoint);
	const datos = await respuesta.json();

	console.log(datos);
};
obtenerDatos();
