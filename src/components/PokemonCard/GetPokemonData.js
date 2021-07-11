import axios from "axios";
import { useQuery } from "react-query";

const GetPokemonData = (pokeName) => {
	const { isLoading, isError, data } = useQuery(
		`get-pokemon-data-${pokeName}`,
		async () => await axios(`https://pokeapi.co/api/v2/pokemon/${pokeName}`),
		{
			refetchOnWindowFocus: false,
		}
	);

	const getId = (id) => id.padStart(3, "0");

	return {
		isLoading,
		isError,
		pokemonData: !data
			? data
			: {
					id: getId(data.data.id.toString()),
					sprite: data.data.sprites.other.dream_world.front_default,
			  },
	};
};

export default GetPokemonData;
