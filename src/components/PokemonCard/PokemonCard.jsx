// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import PokemonSprite from "./PokemonSprite/PokemonSprite";
import { PokemonCardSty } from "./PokemonCard.style";
import { useDispatch, useSelector } from "react-redux";
import { setShowSingle } from "../../redux/slicePokeCards";
import { getSinglePoke } from "../../redux/thunkSinglePoke";
import CardItem from "./CardItem/CardItem";

const PokemonCard = ({ pokeName, id }) => {
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
			showSingle={showSingle}
		>
			<CardItem pokeName={pokeName} id="number" content={id} />
			<CardItem
				pokeName={pokeName}
				id="sprite"
				content={
					<PokemonSprite
						sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						pokeName={pokeName}
						id={id}
					/>
				}
			/>
			<CardItem pokeName={pokeName} id="name" content={pokeName} />
			{showSingle && (
				<>
					<CardItem
						pokeName={pokeName}
						id="category"
						content={speciesData.genera}
					/>
					<CardItem pokeName={pokeName} id="types" content={pokeData.types} />
					<CardItem pokeName={pokeName} id="height" content={pokeData.height} />
					<CardItem pokeName={pokeName} id="weight" content={pokeData.weight} />
					<CardItem
						pokeName={pokeName}
						id="flavor-text"
						content={speciesData.flavor_text_entries}
					/>
				</>
			)}
		</PokemonCardSty>
	);
};

export default PokemonCard;
