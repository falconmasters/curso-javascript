const fetchPosts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const posts = ['Post 1', 'Post 2', 'Post 3'];
			const error = false;

			if (error) {
				reject('Hubo un error al intentar obtener los posts');
			} else {
				resolve(posts);
			}
		}, 2000);
	});
};

fetchPosts()
	.then((posts) => {
		console.log(posts);
	})
	.catch((error) => {
		console.log(error);
	});
