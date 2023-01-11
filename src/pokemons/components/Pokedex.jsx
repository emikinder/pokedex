import { PokedexLeft } from "./PokedexLeft";
import { PokedexRight } from "./PokedexRight";
import { Hinge } from "./UI/Hinge";

export const Pokedex = () => {
	return (
		<>
			<PokedexLeft />
            <Hinge />
			<PokedexRight />
		</>
	);
};
