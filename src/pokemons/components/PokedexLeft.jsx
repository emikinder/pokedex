import { useFetch } from './hooks/useFetch.js';
import { PokedexButtons } from './PokedexButtons.jsx';
import { PokedexDisplay } from './PokedexDisplay.jsx';

export const PokedexLeft = () => {
	const { data, loading } = useFetch(7);

	return (
		<div className='flex flex-col items-center justify-center p-5 w-[282px] h-96 bg-pokered border-l-8 border-b-8 border-t-2 border-r-2 rounded-md border-pokered-shadow'>
			<PokedexDisplay
				name={loading ? '' : data.name}
				image={loading ? '' : data.sprites.front_default}
			/>
			<PokedexButtons />
		</div>
	);
};
