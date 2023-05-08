/*
	📌 Operadores de Comparación:
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en tipo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario

	📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

// 📌 Estructura de una condicional
// if (true) {
// Código a ejecutar
// }

// 📌 Ejemplo #1:
// const usuario = {
// 	edad: 17,
// 	pais: 'Mexico',
// 	ticket: true,
// };

// if (usuario.edad > 17) {
// 	console.log('El usuario es mayor de edad, puede entrar al concierto.');
// } else {
// 	console.log('El usuario es menor de edad, no puede entrar al concierto');
// }

// 📌 Ejemplo #2 - combinando operadores
// const usuario = {
// 	edad: 27,
// 	pais: 'Mexico',
// 	ticket: false,
// };

// if (usuario.edad >= 18 && usuario.ticket) {
// 	console.log('El usuario es mayor de edad y tiene un ticket.');
// } else {
// 	console.log('El usuario es menor de edad o no tiene un ticket.');
// }

// 📌 Ejemplo #3 - Anindando condicionales
// const usuario = {
// 	edad: 27,
// 	pais: 'Mexico',
// 	ticket: false,
// };

// if (usuario.edad >= 18) {
// 	if (usuario.ticket) {
// 		console.log('El usuario es mayor de edad y tiene ticket.');
// 	} else {
// 		console.log('El usuario es mayor de edad, pero no tiene ticket.');
// 	}
// } else {
// 	console.log('El usuario es menor de edad.');
// }

// 📌 Ejemplo #4 - elseif
const usuario = {
	edad: 27,
	pais: 'argentina',
	ticket: false,
};

if (usuario.pais === 'mexico') {
	console.log('El usuario es mexicano');
} else if (usuario.pais === 'colombia') {
	console.log('El usuario es colombiano');
} else if (usuario.pais === 'españa') {
	console.log('El usuario es español');
} else {
	console.log('El usuario es otro pais');
}
