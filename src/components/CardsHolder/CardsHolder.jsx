import GetPokeList from "./GetPokeList";
import PokemonCard from "../PokemonCard/PokemonCard";
import { CardsHolderSty } from "./CardsHolder.styles";
import LoadingRing from "../LoadingRing/LoadingRing";

const CardsHolder = () => {
	const { isLoading, isError, pokeList } = GetPokeList();
	return (
		<CardsHolderSty>
			{isLoading ? (
				<LoadingRing />
			) : !isLoading && !isError ? (
				pokeList.map((pokemon) => (
					<PokemonCard pokeName={pokemon.name} key={`${pokemon.name}-card`} />
				))
			) : (
				<div>error loading the data</div>
			)}
		</CardsHolderSty>
	);
};

export default CardsHolder;
