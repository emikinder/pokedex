import { useState, useEffect } from 'react';

export const useFetch = (id) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
					setLoading(false);
				});
		};

		fetchData();
	}, [id]);

	return { data, loading };
};
