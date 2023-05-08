// href - Retorna la URL de la página actual
console.log(location.href);

// hostname - Retorna el host de la página actual
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

// procotol - Retorna el protocolo utilizado
console.log(location.protocol);

const cargarDocumento = () => {
	location.assign('https://google.com');
};

const irAdelante = () => {
	history.forward();
};
