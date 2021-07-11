import PokemonNumber from "../PokemonNumber/PokemonNumber";
import PokemonSprite from "../PokemonSprite/PokemonSprite";
import PokemonName from "../PokemonName/PokemonName";
import { PokemonCardContainerSty } from "./PokemonCard.style";
import GetPokemonData from "./GetPokemonData";

const PokemonCard = ({ pokeName }) => {
	const { isLoading, isError, pokemonData } = GetPokemonData(pokeName);

	return (
		<div className="col-6 col-md-3">
			{isLoading ? (
				<div>loading...</div>
			) : !isLoading && !isError ? (
				<PokemonCardContainerSty>
					<PokemonNumber number={pokemonData.id} />
					<PokemonSprite sprite={pokemonData.sprite} />
					<PokemonName name={pokeName} />
				</PokemonCardContainerSty>
			) : (
				<div>error</div>
			)}
		</div>
	);
};

export default PokemonCard;
