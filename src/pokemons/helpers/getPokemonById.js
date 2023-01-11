
export const getPokemonById = async (id) => {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then((response) => response.json())
		.then((data) => console.log(data));
};
