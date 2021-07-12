import PokemonNumber from "../PokemonNumber/PokemonNumber";
import PokemonSprite from "../PokemonSprite/PokemonSprite";
import PokemonName from "../PokemonName/PokemonName";
import { PokemonCardSty } from "./PokemonCard.style";
import GetPokemonData from "./GetPokemonData";
import LoadingRing from "../LoadingRing/LoadingRing";

const PokemonCard = ({ pokeName }) => {
	const { isLoading, isError, pokemonData } = GetPokemonData(pokeName);

	// const colorPerType = {
	// 	normal: "#bdbdae",
	// 	fire: "#f95442",
	// 	fighting: "#a85645",
	// 	water: "#55aeff",
	// 	flying: "#79a4ff",
	// 	grass: "#8bd650",
	// 	poison: "#aa5da1",
	// 	electric: "#fee93f",
	// 	ground: "#edcb56",
	// 	psychic: "#fa65b5",
	// 	rock: "#cdbc72",
	// 	ice: "#96f1ff",
	// 	bug: "#c2d21f",
	// 	dragon: "#8975ff",
	// 	ghost: "#7874d4",
	// 	dark: "#8e6956",
	// 	steel: "#c4c2db",
	// 	fairy: "#f9adff",
	// };

	return (
		<PokemonCardSty pokemonColor={pokemonData && pokemonData.color}>
			{isLoading ? (
				<LoadingRing />
			) : !isLoading && !isError ? (
				<>
					<PokemonName name={pokeName} />
					<PokemonSprite sprite={pokemonData.sprite} />
					<PokemonNumber number={pokemonData.id} />
				</>
			) : (
				<div>error loading the data</div>
			)}
		</PokemonCardSty>
	);
};

export default PokemonCard;
