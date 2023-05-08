// 📌 Forma #1
function saludo() {
	console.log('Hola!');
}
const variable = saludo;

// 📌 Forma #2 - Asignando una función a una variable.
const saludo = function () {
	console.log('Hola desde variable!');
};

// 📌 Forma #3 - Función de tipo flecha.
const saludo = () => console.log('Hola!');
saludo();
