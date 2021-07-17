import PokemonNumber from "./PokemonNumber/PokemonNumber";
import PokemonSprite from "./PokemonSprite/PokemonSprite";
import PokemonName from "./PokemonName/PokemonName";
import { PokemonCardSty } from "./PokemonCard.style";
import { useDispatch, useSelector } from "react-redux";
import { setShowSingle } from "../../redux/slicePokeCards";
import { getSinglePoke } from "../../redux/thunkSinglePoke";
import PokemonCategory from "./PokemonCategory/PokemonCategory";

const PokemonCard = ({ pokeName, id }) => {
	// const colorPerType = {
	// 	normal: "#bdbdae",
	// 	fire: "#f95442",
	// 	fighting: "#707070",
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

	const { showSingle, singleCard } = useSelector((state) => state.pokeCards);
	const { pokeData, speciesData } = singleCard;
	const dispatch = useDispatch();

	return (
		<PokemonCardSty
			id={`${pokeName}-pokemon-card`}
			data-testid={"poke-card"}
			onClick={() => {
				!showSingle && dispatch(getSinglePoke(pokeName));
				dispatch(setShowSingle(true));
			}}
		>
			{!showSingle ? (
				<>
					<PokemonName name={pokeName} />
					<PokemonSprite
						sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						pokeName={pokeName}
						id={id}
					/>
					<PokemonNumber number={id.toString().padStart(3, "0")} />
				</>
			) : (
				<>
					<PokemonName name={pokeName} />
					<PokemonSprite
						sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						pokeName={pokeName}
						id={id}
					/>
					<PokemonNumber number={id.toString().padStart(3, "0")} />
					{/* <PokemonCategory category={speciesData.genera} /> */}
				</>
			)}
		</PokemonCardSty>
	);
};

export default PokemonCard;
