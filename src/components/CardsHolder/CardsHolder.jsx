import GetPokeList from "./GetPokeList";
import PokemonCard from "../PokemonCard/PokemonCard";

const CardsHolder = () => {
	const { isLoading, isError, pokeList } = GetPokeList();
	return (
		<div>
			{isLoading ? (
				<div>loading...</div>
			) : !isLoading && !isError ? (
				pokeList.map((pokemon) => (
					<PokemonCard pokeName={pokemon.name} key={`${pokemon.name}-card`} />
				))
			) : (
				<div>error</div>
			)}
		</div>
	);
};

export default CardsHolder;
