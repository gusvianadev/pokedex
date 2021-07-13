import PokemonCard from "../PokemonCard/PokemonCard";
import { CardsHolderSty } from "./CardsHolder.styles";
import LoadingRing from "../LoadingRing/LoadingRing";
import { ButtonSty } from "../Button/Button.style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokeList } from "../../redux/thunkPokeList";
import { changeCurrentUrl } from "../../redux/slicePokeCards";

const CardsHolder = () => {
	const { currentUrl, nextUrl, fetchMore, isLoading, isError, pokeCards } =
		useSelector((state) => state.pokeCards);
	const dispatch = useDispatch();

	useEffect(() => {
		fetchMore && !isLoading && dispatch(getPokeList(currentUrl));
	}, [dispatch, fetchMore, isLoading, currentUrl]);
	return (
		<CardsHolderSty>
			{pokeCards.map((card) => (
				<PokemonCard key={card.pokeName} cardInfo={card} />
			))}
			{isLoading && <LoadingRing />}
			<ButtonSty
				props={{ width: "50%", maxWidth: "150px", padding: ".5rem 0" }}
				onClick={() => dispatch(changeCurrentUrl(nextUrl))}
			>
				<p>more+</p>
			</ButtonSty>
		</CardsHolderSty>
	);
};

export default CardsHolder;
