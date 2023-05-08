const obtenerPostsDeUsuario = (usuario, callback) => {
	console.log(`Obteniendo los post de ${usuario} ...`);

	setTimeout(() => {
		let posts = ['Post1', 'Post2', 'Post3'];
		callback(posts);
	}, 2000);
};

obtenerPostsDeUsuario('carlos', (posts) => {
	console.log(posts);
});
