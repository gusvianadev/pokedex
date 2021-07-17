import PokemonCard from "../PokemonCard/PokemonCard";
import { CardsHolderSty } from "./CardsHolder.styles";
import LoadingRing from "../LoadingRing/LoadingRing";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokeList } from "../../redux/thunkPokeList";
import { changeCurrentUrl } from "../../redux/slicePokeCards";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CardsHolder = () => {
	const {
		currentUrl,
		nextUrl,
		fetchMore,
		showSingle,
		isLoading,
		isError,
		pokeCards,
		singleCard,
	} = useSelector((state) => state.pokeCards);
	const dispatch = useDispatch();

	useEffect(() => {
		fetchMore && !isLoading && dispatch(getPokeList(currentUrl));
	}, [dispatch, fetchMore, isLoading, currentUrl]);

	return (
		<CardsHolderSty data-testid="cards-holder">
			{isError && <ErrorMessage />}
			<div data-testid="cards-container" className="container cards">
				{!showSingle && !isError
					? pokeCards.map((card, i) => (
							<PokemonCard
								key={card.pokeName}
								pokeName={card.pokeName}
								id={i + 1}
							/>
					  ))
					: !isLoading &&
					  !isError && (
							<PokemonCard
								pokeName={singleCard.pokeData.name}
								id={singleCard.pokeData.id}
							/>
					  )}
			</div>
			<div className="container ldn-ring-container">
				{isLoading && <LoadingRing data-testid="ldn-ring" />}
			</div>
			<div className="container button-container">
				{/* the pokeCards.length is to make sure that
                    the button is not rendered until I have at
                    least the first chunk of cards
                */}
				{!isLoading && pokeCards.length !== 0 && !showSingle && !isError && (
					<Button
						aria="search more pokémon button"
						type="button"
						testid="search-more-btn"
						styles={{
							width: "100%",
							maxWidth: "150px",
							padding: ".5rem 0",
						}}
						onClick={() => dispatch(changeCurrentUrl(nextUrl))}
						content={<p>more+</p>}
					/>
				)}
			</div>
		</CardsHolderSty>
	);
};

export default CardsHolder;
