const arreglo = ['Texto', 456.1, false, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);

const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[0]);

const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[3] = 'Blanco';
colores[3] = 'Amarillo';

console.log('El arreglo colores tiene: ' + colores.length + ' colores');

colores.push('Azul');
console.log(colores);
