import axios from "axios";
import { useQuery } from "react-query";

const GetPokemonData = (pokeName) => {
	const { isLoading, isError, data } = useQuery(
		`get-pokemon-data-${pokeName}`,
		async () => {
			const pokemon = await axios(
				`https://pokeapi.co/api/v2/pokemon/${pokeName}`
			);
			const pokemonSpecies = await axios(
				`https://pokeapi.co/api/v2/pokemon-species/${pokeName}`
			);

			return { pokemon, pokemonSpecies };
		},
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
					id: getId(data.pokemon.data.id.toString()),
					sprite: data.pokemon.data.sprites.other.dream_world.front_default,
					color: data.pokemonSpecies.data.color.name,
			  },
	};
};

export default GetPokemonData;
