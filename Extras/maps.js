const persona = {
	nombre: 'Carlos',
};

const mapa = new Map([
	['nombre', 'Carlos'],
	[true, 'verdadero'],
	[persona, { password: '123' }],
]);

// console.log(mapa.get(persona));

mapa.forEach((valor, propiedad) => {
	console.log(valor, propiedad);
});
