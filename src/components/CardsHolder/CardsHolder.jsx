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
			<div className="container cards">
				{pokeCards.map((card) => (
					<PokemonCard key={card.pokeName} cardInfo={card} />
				))}
			</div>
			<div className="container ldn-ring-container">
				{isLoading && <LoadingRing />}
			</div>
			<div className="container button-container">
				<ButtonSty
					props={{
						width: "100%",
						maxWidth: "150px",
						padding: ".5rem 0",
						display: `${pokeCards.length === 0 ? "none" : "flex"}`,
					}}
					onClick={() => dispatch(changeCurrentUrl(nextUrl))}
				>
					<p>more+</p>
				</ButtonSty>
			</div>
		</CardsHolderSty>
	);
};

export default CardsHolder;
